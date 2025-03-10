import Link from "next/link";

export default function CardProduct({
  img,
  name,
  price,
  pin,
  discount,
}) {
  return (
    <section className="border-2 border-dashed border-stroke -mb-0.5 -me-0.5 first:rounded-ss-2xl last:rounded-ee-2xl relative has-[:hover]:border-green-500/50 relative has-[:hover]:z-2 transition-colors duration-200">
      <Link href="/products/1234" className="p-[15px] inline-block h-full">
        {pin &&
          <div className="absolute w-[14px] h-[13px] bg-green-300 flex justify-center items-center rounded-sm text-black-m right-3 top-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="currentColor" className="icon" viewBox="0 0 16 16"><path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146"/></svg>
          </div>
        }

        <img
          src={img}
          alt="Product 4"
          className="rounded-xl"
        />
        <div className="mt-3">
          <h4 className="font-semibold leading-5 mb-3 text-white-c">{name}</h4>
          <h3 className="text-xl font-extrabold text-white-a">{price}</h3>
          {discount &&
            <div className="flex items-center">
              <h3 className="text-l-black font-semibold me-2 line-through">IDR 350.000</h3>
              <span className="font-bold text-xs px-1 py-0.5 bg-red-600 rounded-md">{discount}</span>
            </div>
          }
        </div>
      </Link>
    </section>
  );
}
