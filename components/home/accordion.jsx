'use client';

import { useState } from 'react';

export default function Accordion({
  title,
}) {
  const [show, setShow] = useState(false);

  function handleToogle() {
    setShow(prev => !prev);
  }

  return (
    <section>
      <button
        className={`text-white-c hover:text-white-na text-left btn w-full flex font-medium bg-black-f justify-between py-2 px-3 pe-1.5 rounded-xl ${show ? 'rounded-b-none' : ''}`}
        onClick={handleToogle}
      >
        <span className="flex-1">{title}</span>
        <svg className={`icon w-7 text-white-g ${show ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
      </button>
      {show &&
        <div className="bg-black-s py-3 px-4 rounded-b-xl text-lg">
          <p>Olahraga teratur memiliki banyak manfaat, di antaranya meningkatkan kesehatan jantung, memperkuat tulang dan otot, menjaga berat badan ideal, meningkatkan suasana hati, dan mengurangi risiko penyakit kronis. "Bagaimana cara menjaga pola makan sehat di tengah kesibukan sehari-hari?" Cara menjaga pola makan sehat di tengah kesibukan adalah dengan merencanakan menu makanan mingguan, menyiapkan bekal makanan sehat, memilih camilan sehat, dan memperbanyak konsumsi buah dan sayur. </p>
        </div>
      }
    </section>
  );
}
