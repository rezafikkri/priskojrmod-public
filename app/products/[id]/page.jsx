import EnterQuantity from '@/components/products/enter-quantity';
import ProductDesc from '@/components/products/product-desc';
import ProductDetailImg from '@/components/products/product-detail-img';
import ShareButton from '@/components/products/share-button';

export default function ProductDetail() {
  return (
    <>
      <nav className="[&_li]:not-first:flex [&_li]:items-center w-full lg:max-w-6xl mx-auto px-3 breadcrumb mt-17 md:mt-20 [&_a]:text-green-600 [&_a]:hover:text-green-500">
        <ul className="flex last:text-white-p flex-wrap">
          <li><a href="">Products</a></li>
          <li><a href="">Addon</a></li>
          <li className="C1C1C1">Premier League Scoreboard 2024/25</li>
        </ul>
      </nav>
      <section className="w-full lg:max-w-6xl mx-auto px-3 flex mt-7 flex-wrap">
        <ProductDetailImg />
        <div className="flex-1 md:ps-6.5 relative mt-13 md:mt-0">
          <span className="hr-6 hidden absolute bottom-0 left-0 md:inline-block z-5" />

          <h1 className="text-[32px] font-semibold text-white-j leading-10">Premier League Scoreboard 2024/25</h1>
          <div className="[&_p]:inline-block [&_time]:text-white-k [&_span]:text-white-l mt-2.5 space-x-12.5">
            <p><span>Released at: </span><time>10 Jan 2024</time></p>
            <p><span>Updated at: </span><time>10 Jan 2024</time></p>
          </div>
          <h2 className="text-[40px] font-extrabold text-white-m mt-6">IDR 200.000</h2>
          <div className="flex items-center">
            <h3 className="text-l-black text-2xl font-semibold line-through me-2.5">IDR 400.000</h3>
            <span className="font-bold px-1 py-0.5 bg-red-600 rounded-md">50%</span>
          </div>

          <p className="mt-12.5 text-white-k">Choose variant:</p>
          <div className="flex [&_button]:border [&_button]:border-stroke-a [&_button]:rounded-lg [&_button]:bg-black-d2 [&_button]:px-2.5 [&_button]:py-1.5 space-x-2.5 mt-3 [&_button]:hover:border-green-600 [&_button]:hover:text-green-500 transition-colors duration-200 font-medium">
            <button>Standart</button>
            <button>Premium</button>
            <button>Exlusive</button>
          </div>

          <EnterQuantity />

          <div className="flex md:space-x-4 mt-12.5 [&_button]:font-bold [&_button]:text-center [&_button]:p-4 [&_button]:rounded-lg [&_button]:flex [&_button]:justify-center [&_button]:items-center product-detail-btn flex-wrap">
            <button className="border border-green-600 text-green-500 w-full md:min-w-45 md:flex-1 hover:bg-green-600 hover:text-white-na active:scale-[0.96]">
              <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M12.5 17h-6.5v-14h-2" /><path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
              <span>Add To Cart</span>
            </button>
            <button className="w-full mt-5 md:mt-0 max-[948]:me-0 max-[948]:min-w-45 max-[828]:min-w-35 h-14.5 min-w-40 md:flex-1 bg-green-600 hover:bg-green-500 active:scale-[0.96]">Buy Now</button>
            <ShareButton />
          </div>
        </div>
      </section>
      <section className="relative w-full lg:max-w-6xl mx-auto px-3 mt-12 md:mt-8 mb-25 md:mb-40 flex flex-col">
        <span className="hr-7 absolute top-0 right-3 left-3 inline-block z-5" />
        <ProductDesc />
      </section>
    </>
  );
}
