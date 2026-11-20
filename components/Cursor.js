'use client';
import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dot = useRef(null), ring = useRef(null);
  const trail = useRef([]);
  useEffect(() => {
    if (!window.matchMedia('(pointer:fine)').matches) return;
    document.body.classList.add('nocursor');
    let mx = 0, my = 0, rx = 0, ry = 0, id;
    const pts = trail.current.map(() => ({ x: 0, y: 0 }));
    const mv = (e) => { mx = e.clientX; my = e.clientY; };
    const ov = (e) => ring.current?.classList.toggle('h', !!e.target.closest('a,button,.tilt'));
    const loop = () => {
      dot.current.style.transform = `translate(${mx}px,${my}px)`;
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.current.style.transform = `translate(${rx}px,${ry}px)`;
      let px = rx, py = ry;
      pts.forEach((p, i) => {
        p.x += (px - p.x) * 0.35; p.y += (py - p.y) * 0.35;
        trail.current[i].style.transform = `translate(${p.x}px,${p.y}px)`;
        px = p.x; py = p.y;
      });
      id = requestAnimationFrame(loop);
    };
    addEventListener('mousemove', mv); addEventListener('mouseover', ov);
    id = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(id); removeEventListener('mousemove', mv); removeEventListener('mouseover', ov); document.body.classList.remove('nocursor'); };
  }, []);
  return (
    <div className="cursor" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <i key={i} className="tr" ref={(el) => (trail.current[i] = el)} style={{ opacity: (1 - i / 8) * 0.5 }} />
      ))}
      <i className="cr" ref={ring} />
      <i className="cd" ref={dot} />
    </div>
  );
}
