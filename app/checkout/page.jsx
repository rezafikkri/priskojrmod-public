import CustomerDetails from '@/components/checkout/customer-details';
import OrderItem from '@/components/checkout/order-item';

export default function Checkout() {
  return (
    <section className="w-full lg:max-w-6xl mx-auto px-3 mt-15 mb-20 checkout">
      <h1 className="font-bold text-[32px] text-white-j">Checkout</h1>
      <div className="flex mt-10 md:space-x-5 lg:space-x-7 flex-wrap">
        <div className="w-full md:w-3/5 lg:w-2/3">
          <section>
            <h2 className="text-xl mb-4">
              <span className="me-1 font-medium text-white-k">Order List</span>
              <span className="text-white-s">(3)</span>
            </h2>
            <OrderItem
              img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_2.jpg"
              name="Premier League Scoreboard 2024/25"
              variant="Premium"
              price="IDR 220.000"
              quantity={1}
            />
            <OrderItem
              img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_8.jpg"
              name="BRI Liga 1 INDONESIA New Edition 203/24"
              price="IDR 270.000"
              quantity={1}
            />
            <OrderItem
              img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_1.jpg"
              name="La Liga 3 - three in one scroboard"
              price="IDR 70.000"
              quantity={1}
            />
          </section>
          <section className="mt-7.5">
            <h2 className="font-medium text-white-k text-xl">Customer Details</h2>
            <p className="mt-2.5 text-white-n">Why do you need an account? Because some of our services require customers to sign in to use them, learn more about our services in the <a href="" className="text-green-500">terms and conditions</a>.</p>
            <div className="border-2 border-stroke border-dashed rounded-xl mt-4">
              <CustomerDetails
                title="Sign In"
              />
              <CustomerDetails
                title="Sign Up"
                showCD={true}
              />
            </div>
          </section>
        </div>
        <section className="flex-1 transaction-summary sticky top-23 h-fit max-md:mt-7.5">
          <h2 className="font-medium text-white-k text-xl">Transaction Summary</h2>
          <div className="border-2 border-dashed mt-4 border-stroke rounded-xl p-4">
            <div className="relative pb-4">
              <div className="flex">
                <input type="text" className="border border-stroke rounded-s-lg p-3 w-full -me-[1px] focus:outline-0 focus:border-green-500/50 z-2 placeholder:text-placeholder" placeholder="coupon code" />
                <button className="font-bold bg-black-d2 p-3 border rounded-e-lg border-stroke">Apply</button>
              </div>
              <div className="flex mt-2.5 text-white-p">
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
                <small className="flex-1 text-sm"><a href="" className="text-green-500">Read more</a> to find out how to get coupon code.</small>
              </div>

              <span className="hr-8 absolute bottom-0 -left-2 -right-2 inline-block z-5" />
            </div>

            <h4 className="font-medium text-white-j mt-4">Subtotal</h4>
            <h3 className="font-extrabold text-xl mt-1">IDR 705.000</h3>
            <button className="mt-7.5 w-full bg-green-600 font-bold p-3 rounded-lg hover:bg-green-500 active:scale-[0.96] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19}  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1.5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" /></svg>
              <span>Buy Now</span>
            </button>
            <div className="flex mt-4 text-white-p text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
              <small className="flex-1 text-sm">By continuing payment you agree with our <a href="" className="text-green-500">Terms & Conditions</a> and <a href="" className="text-green-500">Privacy Policy</a>, and you will be directed to WhatsApp to complete payment, therefor the subtotal above does not include tax.</small>
            </div>
          </div>
        </section>
      </div>
    </section>

  );
}
