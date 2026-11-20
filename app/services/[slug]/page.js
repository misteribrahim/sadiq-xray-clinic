import Link from 'next/link';
import { notFound } from 'next/navigation';
import Xray3D from '../../../components/Xray3D';
import { clinic, services } from '../../../lib/data';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export function generateMetadata({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  return { title: s ? `${s.title} | ${clinic.name}` : clinic.name, description: s?.intro };
}

export default function ServicePage({ params }) {
  const s = services.find((x) => x.slug === params.slug);
  if (!s) notFound();
  return (
    <>
      <nav>
        <Link href="/" className="logo">{clinic.name}</Link>
        <div><Link href="/#services">All X-rays</Link><Link href="/#contact">Contact</Link></div>
      </nav>
      <main className="detail">
        <div className="dviewer"><Xray3D paths={s.paths} interactive size={300} /></div>
        <div className="dtext">
          <Link href="/#services" className="back">Back to all X-rays</Link>
          <h1>{s.title}</h1>
          <p className="lead">{s.intro}</p>
          <div className="facts">
            <div><small>Duration</small><b>{s.time}</b></div>
            <div><small>Done by</small><b>{clinic.doctor}</b></div>
          </div>
        </div>
        <div className="blocks">
          <article><h2>What it can show</h2><ul>{s.shows.map((x) => <li key={x}>{x}</li>)}</ul></article>
          <article><h2>When it is recommended</h2><p>{s.when}</p></article>
          <article><h2>How to prepare</h2><p>{s.prep}</p></article>
        </div>
        <div className="btns c">
          <a className="btn" href={`tel:${clinic.phone.replace(/\s/g, '')}`}>Call to book</a>
          <a className="btn o" href={`https://wa.me/${clinic.whatsapp}`}>WhatsApp</a>
        </div>
        <h2 className="oth">Other X-ray types</h2>
        <div className="chips">
          {services.filter((x) => x.slug !== s.slug).map((x) => <Link key={x.slug} href={`/services/${x.slug}/`}>{x.title}</Link>)}
        </div>
      </main>
      <footer>© {new Date().getFullYear()} {clinic.name} · {clinic.doctor}</footer>
    </>
  );
}
