'use client';

import { useState } from 'react';

export default function Home() {
  const [locale, setLocale] = useState('id');

  return (
    <>
      <div className="relative">
        <div className="absolute bg-gray-800 px-3 py-2 rounded-lg -top-15 right-0 font-medium animate-bounce">
          <p>Coming Soon</p>
          <svg className="absolute text-gray-800 icon block -bottom-3.5 ms-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>
        </div>
        <div className="flex items-center justify-center">
          <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/PriskoJrMod.png" height={50} width={50} alt="Prisko Jr Mod Logo" loading="lazy" decoding="async" />
          <h1 className="font-bold text-4xl ms-4">Prisko Jr Mod</h1>
        </div>
      </div>
      <p className="text-[#e8e8e8] text-center [&_strong]:font-semibold mt-9">
        {locale === 'id' ? 
          <span>Maksimalkan pengalaman bermain PES Anda! Temukan <strong>Scoreboard Server lengkap semua Liga/Kompetisi</strong>. Make your dream come true.</span>
          :
          <span>Maximize your PES gaming experience! Discover the <strong>complete Scoreboard Server of all League/Competition</strong>. Make your dream come true.</span>
        }
      </p>
      <div className="text-center text-xs mt-13">
        <button
          className={`border ${locale === 'id' ? 'border-[#383A36]' : 'border-transparent'} rounded-md px-2 py-1`}
          onClick={() => setLocale('id')}
        >
          ID
        </button>
        <button
          className={`border ${locale === 'en' ? 'border-[#383A36]' : 'border-transparent'} rounded-md px-2 py-1`}
          onClick={() => setLocale('en')}
        >
          EN
        </button>
      </div>
    </>
  );
}
