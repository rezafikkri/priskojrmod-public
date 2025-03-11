'use client';

import { useState } from 'react';

export default function CustomerDetails({
  title,
  showCD,
}) {
  const [show, setShow] = useState(showCD);

  function ucfirst(text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
  }

  return (
    <div className={`relative group customer-details ${show ? 'first:pb-4' : ''} last:pt-1`}>
      <button
        className={`flex w-full justify-between hover:text-green-500 transition-colors duration-100 pt-4 px-4 ${show ? 'mb-8' : 'pb-4'} [&_svg]:text-white-g hover:[&_svg]:text-green-500`}
        onClick={() => setShow(prev => !prev)}
      >
        <span className="text-xl font-semibold">{title}</span>
        <svg className={`transition-colors duration-100 icon w-7 ${show ? 'rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 9l6 6l6 -6" /></svg>
      </button>
      {show &&
        <>
          <div className="px-4 group-last:pb-4 hidden">
            <button className="border-2 border-stroke rounded-lg w-full p-3 font-semibold flex items-center justify-center hover:bg-black-d2 active:scale-[0.96]">
              <img
                src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/google-g.png"
                alt="google g"
                width={22}
                height={22}
                className="me-2.5"
              />
              <span>{ucfirst(title)} with Google</span>
            </button>
          </div>
          <form action="" className="px-4 group-last:pb-4 [&_label]:mb-2.5 [&_label]:block [&_label]:text-white-p [&_label]:text-sm [&_input]:border [&_input]:border-stroke [&_input]:rounded-lg [&_input]:p-3 [&_input]:w-full [&_input]:focus:outline-none [&_input]:focus:border-green-500/50">
            <span className="text-white-p text-sm mb-2.5">Email</span>
            <p className="text-white-k">fikkri.reza@gmail.com</p>

            <div className="flex sm:space-x-3 mt-6 flex-wrap">
              <div className="max-sm:w-full sm:flex-1">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" />
              </div>
              <div className="max-sm:w-full sm:flex-1 max-sm:mt-6">
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" />
              </div>
            </div>

            <label htmlFor="phone-code" className="mt-6">Phone Number</label>
            <div className="flex">
              <select name="phone-code" id="phone-code" className="pe-10 border border-stroke rounded-s-lg p-3 -me-[0.1px] focus:outline-0 focus:border-green-500/50 focus:z-3 bg-black-m">
                <option value="">+62 (Indonesia)</option>
                <option value="">+62 (Indonesia)</option>
              </select>
              <input type="number" className="rounded-s-none! relative focus:z-2" />
            </div>
          </form>
        </>
      }

      <span className="hr-8 absolute -bottom-1 left-3 right-3 inline-block z-5 group-last:hidden" />
    </div>
  );
}
