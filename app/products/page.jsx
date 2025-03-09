import CardProductPin from "@/components/products/card-product-pin";

export default function Products() {
  return (
    <>
      <section className="w-full lg:max-w-6xl mx-auto mt-20 px-3">
        <h1 className="text-4xl font-semibold">Products</h1>
      </section>
      <section className="w-full lg:max-w-6xl mx-auto mt-7 px-3">
        <h2 className="font-semibold text-white-a1">Pinned</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 mb-2 me-0.5">
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_4.jpg"
            name="Sider Manager - Apps for manage your Addon"
            price="IDR 80.000"
            pin={true}
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_1.jpg"
            name="La Liga 3 - three in one scroboard"
            price="IDR 270.000"
            pin={true}
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_2.jpg"
            name="Premier League Scoreboard 2024/25"
            price="IDR 170.000"
            pin={true}
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_7.jpg"
            name="Sky Bet EFL Championship Scoreboard 2023/24"
            price="IDR 570.000"
            pin={true}
          />
        </div>
      </section>

      <section className="w-full lg:max-w-6xl mx-auto mt-10 px-3 mb-25">
        <h2 className="font-semibold text-white-a1">Others</h2>

        <div className="mt-5 space-x-15 space-y-3">
          <div className="font-medium inline-block md:mb-0">
            <span className="text-white-a2">Price Type: </span>
            <select name="price-type" id="price-type" className="outline-0 bg-black-m pe-6">
              <option value="">Free & Paid</option>
              <option value="">Free & Paid</option>
            </select>
          </div>
          <div className="font-medium inline-block">
            <span className="text-white-a2">Category: </span>
            <select name="category" id="category" className="outline-0 bg-black-m pe-6">
              <option value="">all</option>
              <option value="">all</option>
            </select>
          </div>
          <div className="font-medium inline-block">
            <span className="text-white-a2">Sort by: </span>
            <select name="sort-by" id="sort-by" className="outline-0 bg-black-m pe-6">
              <option value="">Most Updated</option>
              <option value="">Most Updated</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 mb-2 me-0.5">
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_6.jpg"
            name="Piala Presiden 2024 - All In One Product"
            price="IDR 175.000"
            discount="41%"
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_5.jpg"
            name="50+ PES 2017 Menu Server V1 2024/25"
            price="Free"
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_8.jpg"
            name="BRI Liga 1 INDONESIA New Edition 203/24"
            price="IDR 270.000"
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_10.jpg"
            name="EURO 2024 Germany - Exclusive Modpack"
            price="IDR 60.000"
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_9.jpg"
            name="Premier League Modpack 2024/25"
            price="IDR 90.000"
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_1.jpg"
            name="La Liga 3 - three in one scroboard"
            price="IDR 270.000"
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_2.jpg"
            name="Premier League Scoreboard 2024/25"
            price="IDR 170.000"
          />
          <CardProductPin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_7.jpg"
            name="Sky Bet EFL Championship Scoreboard 2023/24"
            price="IDR 570.000"
          />
        </div>
      </section>
    </>
  );
}
