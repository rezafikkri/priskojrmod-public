export default function DownloadDefaultAddon() {
  return (
    <section className="w-full lg:max-w-4xl mx-auto px-3 mt-20 mb-20 download-default-addon">
      <h1 className="text-center font-bold text-[32px]">Download Default Addon</h1>
      <p className="mt-1 text-center text-xl text-white-n">This is the default addon for <a href="" className="text-green-500">Sider Manager</a> app.</p>

      <form action="" className="w-full md:max-w-xl mx-auto mt-13.5">
        <label htmlFor="license-key" className="text-white-p text-sm">License Key</label>
        <textarea
          name="license-key"
          id="license-key"
          className="border border-stroke rounded-lg p-3 focus:outline-0 focus:border-green-500/50 w-full mt-2.5 placeholder:text-placeholder"
          spellCheck={false}
          rows={10}
          placeholder="Enter your Sider Manager app license key"
        />
        <button type="submit" className="flex w-full p-3 justify-center items-center bg-green-600 hover:bg-green-500 rounded-lg font-bold mt-6 active:scale-[0.96]">
          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" /><path d="M7 11l5 5l5 -5" /><path d="M12 4l0 12" /></svg>
          <span>Download</span>
        </button>
        <div className="flex mt-8 text-white-p justify-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
          <small className="text-base">Don't have a license key? <a href="" className="text-green-500">Buy Sider Manager app</a></small>
        </div>
      </form>
    </section>  
  );
}
