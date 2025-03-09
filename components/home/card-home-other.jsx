export default function CardHomeOther({
  img,
  name,
  price,
  discount,
}) {
  return (
    <section className="swiper-slide basis-2xs [&_img]:w-full rounded-xl rounded-b-none border-t-2 border-e-2 border-dashed border-stroke has-[:hover]:border-green-500/50 transition-all! duration-200">
      <a href="" className="ps-1 pe-3 pt-3 inline-block">
        <img
          src={img}
          alt="product 5"
          className="rounded-xl"
        />
        <div className="py-3 px-2.5">
          <h3 className="font-semibold text-white-c">{name}</h3>
          <h2 className="font-extrabold text-xl text-white-a mt-4">{price}</h2>
          {discount &&
            <div className="flex items-center">
              <h3 className="text-l-black font-semibold me-2 line-through">IDR 350.000</h3>
              <span className="font-bold text-xs px-1 py-0.5 bg-red-600 rounded-md">{discount}</span>
            </div>
          }
        </div>
      </a>
    </section>
  );
}
