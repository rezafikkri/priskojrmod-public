export default function UpgradeLicense() {
  return (
    <section className="w-full lg:max-w-4xl mx-auto px-3 mt-20 mb-20 upgrade-license">
      <h1 className="text-center font-bold text-[32px]">Upgrade License</h1>
      <p className="text-center text-xl text-white-n">If you don’t own a license yet please <a href="" className="text-green-500">buy Sider Manager app</a>.</p>
      <div className="flex md:space-x-5 lg:space-x-7 mt-17.5 flex-wrap">
        <section className="max-md:w-full w-4/7">
          <h2 className="text-white-k font-medium text-xl">Upgrade Information</h2>
          <p className="text-white-n mt-2.5">Upgrading a license will invalidate the previous license, and a new license will be given to you. The new license is still valid for all previous versions. See more in <a href="" className="text-green-500">Sider Manager app license</a>.</p>

          <div className="border-2 border-stroke border-dashed rounded-xl p-4 mt-4">
            <form action="" className="[&_label]:mb-2.5 [&_label]:block [&_label]:text-white-p [&_label]:text-sm [&_input]:border [&_input]:border-stroke [&_input]:rounded-lg [&_input]:p-3 [&_input]:w-full [&_input]:focus:outline-none [&_input]:focus:border-green-500/50">
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
                <select name="phone-code" id="phone-code" className="pe-10 border border-stroke rounded-s-lg p-3 -me-[1px] focus:outline-0 focus:border-green-500/50 focus:z-3 bg-black-m">
                  <option value="">+62 (Indonesia)</option>
                  <option value="">+62 (Indonesia)</option>
                </select>
                <input type="number" className="rounded-s-none! relative focus:z-2" />
              </div>

              <label htmlFor="license-key" className="mt-6">License Key</label>
              <textarea
                name="license-key"
                id="license-key"
                className="border border-stroke rounded-lg p-3 focus:outline-0 focus:border-green-500/50 w-full"
                spellCheck={false}
                rows={10}
              />
              <div className="flex text-white-s mt-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
                <small className="flex-1">Enter the license key you  want to upgrade</small>
              </div>
            </form>
          </div>
        </section>
        <section className="flex-1 h-fit sticky top-23 max-md:mt-7.5">
          <h2 className="text-white-k font-medium text-xl">Transaction Summary</h2>

          <div className="border-2 border-dashed mt-4 border-stroke rounded-xl p-4">
            <h3 className="font-extrabold text-xl">IDR 219.600</h3>
            <div className="flex items-center mt-1">
              <h3 className="text-l-black font-semibold me-2 line-through">IDR 244.000</h3>
              <span className="font-bold text-sm px-1 py-0.5 bg-red-600 rounded-md">10%</span>
            </div>

            <button className="mt-7.5 w-full bg-green-600 font-bold p-3 rounded-lg hover:bg-green-500 active:scale-[0.96] flex items-center justify-center active:scale-[0.96]">
              <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
              <span>Pay Now</span>
            </button>
            <div className="flex mt-4 text-white-p">
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
              <small className="flex-1 text-sm">By continuing payment you agree with our <a href="" className="text-green-500">Terms & Conditions</a> and <a href="" className="text-green-500">Privacy Policy</a>, and you will be directed to WhatsApp to complete payment.</small>
            </div>
          </div>

          <div className="flex mt-4 text-white-p">
            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
            <small className="flex-1 text-base">If you have questions, see the <a href="" className="text-green-500">Frequently Asked Questions</a></small>
          </div>
        </section>
      </div>
    </section>
  );
}
