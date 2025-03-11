'use client';

import { useState } from "react";

export default function ShareButton() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative max-[948]:mt-6">
      <button
        className="w-16 border border-stroke-a lg:ms-1.5 hover:bg-black-d2 h-14.5 active:scale-[0.96]"
        onClick={() => setShowMenu(prev => !prev)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M8.7 10.7l6.6 -3.4" /><path d="M8.7 13.3l6.6 3.4" /></svg>

      </button>
      {showMenu &&
        <ul className="absolute top-17 min-w-40 text-left max-md:left-auto max-[948]:left-0 md:right-0 border border-stroke-a bg-black-d2 p-3 space-y-3 rounded-lg [&_a]:transition-colors [&_a]:duration-200 z-10">
          <li><a href="" className="hover:text-[#1DA1F2]">
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
            <span>Twitter</span>
          </a></li>
          <li><a href="" className="hover:text-[#1877F2]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon me-2" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>
            <span>Facebook</span>
          </a></li>
          <li><a href="" className="hover:text-[#25D366]">
            <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
            <span>WhatsApp</span>
          </a></li>
        </ul>
      }
    </div>
  );
}
