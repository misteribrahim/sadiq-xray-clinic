'use client';
import Link from 'next/link';
import Xray3D from './Xray3D';

export default function ServiceCard({ s }) {
  const move = (e) => {
    const c = e.currentTarget, r = c.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    c.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg)`;
  };
  return (
    <div className="card">
      <Link href={`/services/${s.slug}/`} className="tilt" onMouseMove={move} onMouseLeave={(e) => (e.currentTarget.style.transform = '')}>
        <Xray3D paths={s.paths} size={150} />
        <h3>{s.title}</h3>
        <p>{s.short}</p>
        <span className="more">View details</span>
      </Link>
    </div>
  );
}
