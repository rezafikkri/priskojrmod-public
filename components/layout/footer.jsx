export default function Footer() {
  return (
    <footer className="flex justify-between w-full lg:max-w-6xl mx-auto px-3 py-15 flex-wrap">
      <div className="w-full md:w-auto">
        <p className="text-white-h">© 2025 Prisko Jr Mod.</p>
        <div className="flex mt-10 [&_button]:py-2 [&_button]:px-3 [&_button]:rounded-xl">
          <button className="bg-black-f">Indonesia</button>
          <button>English</button>
        </div>
      </div>
      <div className="flex text-white-h mt-20 md:mt-0">
        <ul className="me-10">
          <li><a href="">About Us</a></li>
          <li className="mt-10"><a href="">Privacy Policy</a></li>
        </ul>
        <ul className="me-10 md:me-25">
          <li><a href="">Terms and Conditions</a></li>
          <li className="mt-10"><a href="">FAQ</a></li>
        </ul>
        <ul>
          <li><a href="">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="icon" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/></svg>
          </a></li>
        </ul>
      </div>
    </footer>
  );
}
