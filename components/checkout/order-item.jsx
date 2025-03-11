export default function OrderItem({
  img,
  name,
  variant,
  price,
  quantity,
}) {
  return (
    <article className="flex p-4 border-x-2 nth-2:border-t-2 nth-2:rounded-t-xl last:border-b-2 border-dashed border-stroke -mt-0.5 last:rounded-b-xl relative group flex-wrap">
      <img
        src={img}
        alt="Product 5"
        width={170}
        className="rounded-lg self-start max-sm:w-full"
      />
      <div className="flex max-lg:flex-col max-sm:ms-0 ms-4 lg:space-x-4 flex-1 max-sm:mt-5 flex-wrap">
        <div className="flex-1">
          <h3 className="font-semibold text-white-j">{name}</h3>
          {variant &&
            <p className="mt-1.5">
              <span className="text-white-s">Variant: </span>
              <span className="text-white-k">{variant}</span>
            </p>
          }
        </div>
        <div className="min-w-40 max-lg:mt-5">
          <h4 className="text-xl font-bold">{quantity} x {price}</h4>
        </div>
      </div>
      <span className="hr-8 absolute bottom-0 left-3 right-3 inline-block z-5 group-last:hidden" />
    </article>
  );
}
