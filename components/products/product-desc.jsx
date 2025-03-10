'use client';

import { useState } from 'react';

export default function ProductDesc() {
  const [show, setShow] = useState('desc');

  return (
    <>
      <nav className="mt-6 font-semibold relative pe-5 self-start">
        <hr className="border-b border-t-0 border-stroke-b absolute bottom-0 left-0 right-0" />
        <ul className="flex pe-4 [&_li]:border-b [&_li]:border-stroke-b [&_button]:px-5 [&_button]:pb-2 relative z-2 [&_li.active]:border-green-500 [&_li.active_button]:text-green-500">
          <li className={show === 'desc' ? 'active' : ''}>
            <button onClick={() => setShow('desc')}>Descriptions</button>
          </li>
          <li className={show === 'license' ? 'active' : ''}>
            <button onClick={() => setShow('license')}>Licenses</button>
          </li>
        </ul>
      </nav>
      {show === 'desc' ?
        <div className="mt-6">
          <p className="text-white-m leading-6.5">Elevate your projects with our professionally designed templates, crafted to save you time and inspire your next big idea. Perfect for personal and commercial use, these customizable templates are your go-to solution for stunning designs. Whether you're a beginner or a pro, [Product Name] makes creativity effortless. Download now and bring your vision to...</p>
          <a href="" className="text-green-500 mt-2 block">See more</a>
        </div>
      : 
        <p className="mt-6 text-white-m leading-6.5">Elevate your projects with our professionally designed templates, crafted to save you time and inspire your next big idea. Perfect for personal and commercial use, these customizable templates are your go-to solution for stunning designs. Whether you're a beginner or a pro, [Product Name] makes creativity effortless. Download now and bring your vision to...</p>

      }

      <div className="flex mt-17 items-center border-2 border-dashed border-stroke-a py-3 px-4.5 self-start rounded-xl">
        <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/profile.png" alt="Profile" width={43} height={43} className="rounded-full me-4" />
        <div>
          <h5 className="text-white-m leading-4 font-semibold">Prisko Jr Mod</h5>
          <small>
            <span className="text-white-r">Owner . </span>
            <a href="" className="font-medium text-white-b">@priskojrmod</a>
          </small>
        </div>
      </div>
    </>
  );
}
