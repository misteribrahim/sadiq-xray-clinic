import { services } from '../lib/data';
export const dynamic = 'force-static';

export default function sitemap() {
  const base = 'https://sadiqxray.com';
  return [
    { url: `${base}/`, lastModified: new Date() },
    ...services.map((s) => ({ url: `${base}/services/${s.slug}/`, lastModified: new Date() })),
  ];
}