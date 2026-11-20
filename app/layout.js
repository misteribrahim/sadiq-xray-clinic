import { Sora } from 'next/font/google';
import './globals.css';
import Cursor from '../components/Cursor';
import { clinic } from '../lib/data';

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '800'] });

export const metadata = {
  title: `${clinic.name} | Digital X-ray by ${clinic.doctor}`,
  description: `Digital X-ray for skull, chest, bones, backbone and joints. ${clinic.years} years of experience.`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
