import { Montserrat } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/header';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  fallback: ['sans-serif'],
});

export const metadata = {
  title: 'Prisko Jr Mod - Make Your Dream Come True',
  description: 'Maksimalkan pengalaman bermain PES Anda! Temukan Scoreboard Server lengkap semua Liga/Kompetisi. Make your dream come true.',
  keywords: ['PES 2017', 'PES 2017 Season Update', 'Pro Evolution Soccer'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className={montserrat.variable}>
        <Header />
        <main className="overflow-hidden min-h-screen">{children}</main>
      </body>
    </html>
  );
}
