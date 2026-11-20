import Link from 'next/link';
import Xray3D from '../components/Xray3D';
import ServiceCard from '../components/ServiceCard';
import { clinic, services } from '../lib/data';

export default function Home() {
  return (
    <>
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'MedicalClinic',
    name: clinic.name,
    url: 'https://sadiqxray.com',
    telephone: clinic.phone,
    address: { '@type': 'PostalAddress', streetAddress: clinic.address, addressCountry: 'PK' },
    medicalSpecialty: 'Radiology',
    employee: { '@type': 'Person', name: clinic.doctor },
  }) }}
/>
      <nav>
        <Link href="/" className="logo">{clinic.name}</Link>
        <div><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a></div>
      </nav>

      <header className="hero">
        <div>
          <h1>Sadiq Digital<em>X-Ray Clinic</em></h1>
          <p>Clear, fast digital imaging by {clinic.doctor}, with more than {clinic.years} years of experience in X-ray.</p>
          <div className="btns">
            <a className="btn" href="#contact">Book an X-ray</a>
            <a className="btn o" href="#services">See X-ray types</a>
          </div>
        </div>
        <div className="big"><div className="scan" /><Xray3D paths={services[0].paths} size={320} /></div>
      </header>

      <div className="stats">
        <div><b>{clinic.years}</b><small>years of experience</small></div>
        <div><b>Digital</b><small>low-dose imaging</small></div>
        <div><b>Same day</b><small>reports and films</small></div>
      </div>

      <section id="services">
        <div className="hd"><h2>X-ray services</h2><p>Select any X-ray type to open its interactive 3D model and full details.</p></div>
        <div className="grid">{services.map((s) => <ServiceCard key={s.slug} s={s} />)}</div>
      </section>

      <section className="about" id="about">
        <div className="hd">
          <h2>Meet {clinic.doctor}</h2>
          <p>{clinic.doctor} has spent over two decades capturing precise X-ray images for patients and doctors. At {clinic.name}, every image is taken with care, so your doctor gets a clear picture the first time.</p>
        </div>
        <ul><li>Careful positioning for sharp images</li><li>Digital films you can share with your doctor</li><li>Quick service for adults and children</li></ul>
      </section>

      <section className="contact" id="contact">
        <h2>Need an X-ray?</h2>
        <p className="mut">{clinic.address}<br />{clinic.hours}</p>
        <div className="btns c">
          <a className="btn" href={`tel:${clinic.phone.replace(/\s/g, '')}`}>Call {clinic.phone}</a>
          <a className="btn o" href={`https://wa.me/${clinic.whatsapp}`}>WhatsApp</a>
        </div>
      </section>
      <footer>© {new Date().getFullYear()} {clinic.name} · {clinic.doctor}</footer>
    </>
  );
}
