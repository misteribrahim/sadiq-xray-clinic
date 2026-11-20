'use client';
import { useEffect, useRef, useState } from 'react';

const LAYERS = [-36, -24, -12, 0, 12, 24, 36];

export default function Xray3D({ paths, interactive = false, size = 300 }) {
  const [a, setA] = useState({ x: -10, y: 0 });
  const [auto, setAuto] = useState(true);
  const [spread, setSpread] = useState(false);
  const [scan, setScan] = useState(true);
  const drag = useRef(null);

  useEffect(() => {
    if (!interactive || !auto) return;
    let id;
    const tick = () => { setA((p) => ({ ...p, y: p.y + 0.6 })); id = requestAnimationFrame(tick); };
    id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [interactive, auto]);

  const layers = LAYERS.map((z, i) => (
    <svg key={z} viewBox="0 0 100 100" dangerouslySetInnerHTML={{ __html: paths }}
      style={{ transform: `translateZ(${spread ? z * 2.2 : z}px)`, opacity: 0.25 + 0.75 * (i / (LAYERS.length - 1)) }} />
  ));

  if (!interactive) {
    return (
      <div className="scene" style={{ '--s': size + 'px' }}>
        <div className="obj spin">{layers}</div>
      </div>
    );
  }
  return (
    <div className="viewer">
      <div
        className="scene grab" style={{ '--s': size + 'px' }}
        onPointerDown={(e) => { drag.current = { x: e.clientX, y: e.clientY }; setAuto(false); e.currentTarget.setPointerCapture(e.pointerId); }}
        onPointerMove={(e) => {
          if (!drag.current) return;
          const dx = e.clientX - drag.current.x, dy = e.clientY - drag.current.y;
          drag.current = { x: e.clientX, y: e.clientY };
          setA((p) => ({ x: Math.max(-70, Math.min(70, p.x - dy * 0.5)), y: p.y + dx * 0.6 }));
        }}
        onPointerUp={() => (drag.current = null)}
      >
        {scan && <div className="scanline" />}
        <div className="obj" style={{ transform: `rotateX(${a.x}deg) rotateY(${a.y}deg)` }}>{layers}</div>
      </div>
      <div className="ctrls">
        <button onClick={() => setAuto(!auto)} aria-pressed={auto}>Auto rotate</button>
        <button onClick={() => setSpread(!spread)} aria-pressed={spread}>Exploded layers</button>
        <button onClick={() => setScan(!scan)} aria-pressed={scan}>Scan line</button>
        <button onClick={() => setA({ x: -10, y: 0 })}>Reset</button>
      </div>
      <p className="hint">Drag to rotate the 3D model</p>
    </div>
  );
}
