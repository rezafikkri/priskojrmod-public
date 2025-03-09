'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [showServices, setShowServices] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const currentPathname = usePathname();

  function getActive(pathname, activeClass) {
    if (currentPathname === pathname) return activeClass;
  }

  return (
    <>
      <button
        type="button"
        className={`md:hidden px-2 z-9 ${showNav ? 'text-white-n/70':''}`}
        onClick={() => setShowNav(prev => !prev)}
      >
        {showNav ?
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
        :
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>
        }
      </button>
      <nav className={`[&_a]:inline-block [&_svg]:inline-block font-bold items-center ${showNav ? 'block absolute right-0 bg-[#141414] h-screen pt-15 p-6':'hidden'} md:h-auto md:pt-0 md:p-0 md:flex md:static md:bg-transparent`}>
        <ul className="[&>li]:py-2 mb-10 md:mb-0 [&>li]:md:px-4 [&>li]:lg:px-6 md:me-10 lg:me-20 [&>li]:md:inline-block">
          <li><Link href="/products" className={getActive('/products', 'text-green-500')}>Products</Link></li>
          <li className="relative">
            <button onClick={() => setShowServices(prev => !prev)} type="button">
              <span className="me-1">Services</span>
              <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="currentColor" className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" /></svg>
            </button>
            {showServices &&
              <ul className="-left-25 md:left-0 -right-3 md:-right-35 lg:-right-30 top-11 md:top-13 absolute bg-black-s [&_a]:block [&_a]:px-5 py-5 space-y-5 rounded-xl shadow-lg">
                <li><a href="">Upgrade License</a></li>
                <li><a href="">Download Default Addon</a></li>
              </ul>
            }
          </li>
          <li><a href="">Contact</a></li>
        </ul>
        <ul className="[&_li]:px-2 [&>li]:inline-block md:me-2">
          <li>
            <a href="" className="rounded-full overflow-hidden">
              <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/profile.png" alt="Profile" width={23} height={23} />
            </a>
          </li>
          <li>
            <a href="">
              <svg xmlns="http://www.w3.org/2000/svg" width={23} height={23} viewBox="0 0 24 24" fill="none"  stroke="currentColor"  strokeWidth={1.75}  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M17 17h-11v-14h-2" /><path d="M6 5l14 1l-1 7h-13" /></svg>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
