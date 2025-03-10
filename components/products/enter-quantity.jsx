'use client';

import { useState } from "react";

export default function EnterQuantity() {
  const [quantity, setQuantity] = useState(1);

  function handleQuantity(action) {
    if (action === 'minus' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (action === 'plus') {
      setQuantity(quantity + 1);
    }
  }

  return (
    <>
      <p className="mt-8 text-white-k">Enter quantity:</p>
      <div className="flex [&_button]:py-1.5 [&_button]:px-2 [&_button]:border-y [&_button]:border-stroke-a mt-3 [&_button]:flex [&_button]:items-center">
        <button
          className="border-s border-stroke-a rounded-s-lg text-white-o"
          onClick={() => handleQuantity('minus')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l14 0" /></svg>
        </button>
        <input type="text" className="border-y border-stroke-a py-1.5 px-2 w-15 text-center text-white-k" disabled value={quantity}/>
        <button
          className="border-e border-stroke-a rounded-e-lg text-green-200"
          onClick={() => handleQuantity('plus')}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 5l0 14" /><path d="M5 12l14 0" /></svg>
        </button>
      </div>
    </>
  );
}
