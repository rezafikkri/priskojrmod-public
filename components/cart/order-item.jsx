import Quantity from './quantity';

export default function OrderItem({
  img,
  name,
  variant,
  price,
  discount,
}) {
  return (
    <article className="flex p-4 border-x-2 last:border-b-2 border-dashed border-stroke -mt-0.5 last:rounded-b-xl relative group flex-wrap">
      <div className="flex max-sm:w-full">
        <label className={`flex items-center w-5 h-5 relative checkbox me-4`}>
          <input
            name="select-all"
            id="select-all"
            type="checkbox"
            className={`peer w-full h-full appearance-none rounded-sm border border-stroke-a checked:border-green-600 checked:bg-green-600 transition-colors duration-50`}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={4}  strokeLinecap="round"  strokeLinejoin="round"  className="icon absolute opacity-0 peer-checked:opacity-100 transition-opacity duration-70 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
        </label>
        <img
          src={img}
          alt="Product 5"
          width={170}
          className="rounded-lg self-start max-sm:flex-1"
        />
      </div>
      <div className="flex max-sm:ms-8 ms-4 lg:space-x-4 flex-1 max-lg:flex-col max-sm:mt-5">
        <div className="flex-1 flex justify-between flex-col">
          <div>
            <h3 className="font-semibold text-white-j">{name}</h3>
            {variant &&
              <p>
                <span className="text-white-s">Variant: </span>
                <span className="text-white-k">{variant}</span>
              </p>
            }
          </div>
          <Quantity />
        </div>
        <div className="lg:text-end min-w-40 flex flex-col ld:justify-between max-lg:mt-5">
          <div>
            <h4 className="text-xl font-bold">{price}</h4>
            {discount &&
              <div className="flex items-center justify-end mt-1.5 max-lg:flex-row-reverse">
                <span className="font-bold text-sm px-1 py-0.5 bg-red-600 rounded-md md:me-2">{discount}</span>
                <h3 className="text-l-black font-medium line-through max-lg:me-2">IDR 350.000</h3>
              </div>
            }
          </div>
          <button className="hover:text-red-500 transition-colors duration-100 mt-[14px] text-white-s self-start lg:self-end">
            <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" fill="none"  stroke="currentColor" strokeWidth={2} strokeLinecap="round"  strokeLinejoin="round"  className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
          </button>
        </div>
      </div>
      <span className="hr-8 absolute bottom-0 left-3 right-3 inline-block z-5 group-last:hidden" />
    </article>
  );
}
