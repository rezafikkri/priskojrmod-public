import OrderItem from '@/components/cart/order-item';
import Link from 'next/link';

export default function Cart() {
  return (
    <section className="w-full lg:max-w-6xl mx-auto px-3 mt-15 mb-20 cart">
      <h1 className="font-bold text-[32px] text-white-j">Cart</h1>
      <div className="flex mt-10 space-x-5 lg:space-x-7 flex-wrap">
        <section className="max-[953]:w-full max-[953]:me-0 w-2/3">
          <h2 className="font-medium text-white-k text-xl">Order List</h2>
          <div className="flex justify-between items-center w-full mt-4 border-2 border-dashed border-stroke py-3.5 px-4 text-sm font-semibold rounded-t-xl">
            <div className="flex items-center text-white-na">
              <label className={`relative flex items-center`}>
                <input
                  name="select-all"
                  id="select-all"
                  type="checkbox"
                  className={`peer h-4 w-4 appearance-none rounded-sm border checked:border-8 border-stroke-a checked:!border-green-600 transition-all duration-50`}
                />
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={4}  strokeLinecap="round"  strokeLinejoin="round"  className="icon absolute opacity-0 peer-checked:opacity-100 transition-opacity duration-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M5 12l5 5l10 -10" /></svg>
              </label>
              <label htmlFor="select-all" className="ms-3">
                <span className="text-white-k me-1">Select all</span>
                <span className="text-white-s">(2)</span>
              </label>
            </div>
            <button className="hover:text-red-500 transition-colors duration-100">Remove</button>
          </div>

          <div>
            <OrderItem
              img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_2.jpg"
              name="Premier League Scoreboard 2024/25"
              variant="Premium"
              price="IDR 220.000"
              discount="53%"
            />
            <OrderItem
              img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_8.jpg"
              name="BRI Liga 1 INDONESIA New Edition 203/24"
              price="IDR 270.000"
            />
            <OrderItem
              img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_1.jpg"
              name="La Liga 3 - three in one scroboard"
              price="IDR 70.000"
            />
          </div>
        </section>
        <section className="flex-1 transaction-summary sticky top-23 h-fit max-[953]:mt-8">
          <h2 className="font-medium text-white-k text-xl">Transaction Summary</h2>
          <div className="border-2 border-dashed mt-4 border-stroke rounded-xl p-4">
            <h4 className="font-medium text-white-j">Subtotal</h4>
            <h3 className="font-bold text-xl mt-1">IDR 705.000</h3>
            <Link href="/checkout" className="block text-center mt-11.5 w-full bg-green-600 font-bold p-3 rounded-lg hover:bg-green-500 active:scale-[0.96]">Checkout Now</Link>
            <div className="flex mt-4 text-white-p">
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
              <small className="flex-1">Subtotal does not include tax.</small>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
