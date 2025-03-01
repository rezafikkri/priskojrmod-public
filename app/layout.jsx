import { Montserrat } from 'next/font/google';
import './globals.css';

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
      <body
        className={`flex flex-col items-center justify-center ${montserrat.variable} min-h-screen`}
      >
        <main className="w-md">{children}</main>
        <footer className="w-md text-xs text-white/80 text-center mt-4">&copy; 2025 Prisko Jr Mod</footer>
      </body>
    </html>
  );
}
