import Accordion from '@/components/home/accordion';
import CardHomePin from '@/components/home/card-home-pin';
import CardHomeSlide from '@/components/home/card-home-slide';
import CardTestimonial from '@/components/home/card-testimonial';

export default function Home() {
  return (
    <>
      <section className="relative pt-25">
        <span className="hr-1 absolute top-2 right-3/5 inline-block z-5" />
        <span className="hr-2 absolute top-20 right-3 inline-block z-5" />

        <div className="w-full lg:max-w-6xl mx-auto px-3">
          <h1 className="text-5xl font-extrabold text-white-na text-center z-88 relative">Make Your Dream Come True</h1>
          <div className="flex text-[10px] justify-center text-white-b mt-6 gap-14 [&_p]:mt-1 opacity-90">
            <div>
              <img
                src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/1.png"
                alt="2d graphics"
                width={127}
                height={35}
              />
              <p><b>Modpack</b> Model Blender</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/2.png"
                alt="3d model"
                width={127}
                height={35}
              />
              <p><b>Modpack</b> Model Blender</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/3.png"
                alt="sider"
                width={106}
                height={35}
              />
              <p><b>Lua Module</b> Scripting</p>
            </div>
          </div>
        </div>

        <span className="hr-3 absolute max-[769px]:top-73 top-63 left-2 inline-block z-5" />
        <span className="hr-4 absolute max-[769px]:top-73 top-63 right-3/5 inline-block z-5" />
        <span className="hr-4 absolute max-[769px]:top-73 top-63 right-2/5 inline-block z-5" />
        
        <div className="flex justify-center mt-26 gap-5 md:gap-15 items-start px-3 flex-wrap">
          <CardHomePin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_1.jpg"
            name="La Liga 3 - three in one scroboard "
            price="IDR 270.000"
          />
          <CardHomePin
            img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_4.jpg"
            name="Sider Manager - Apps for manage your Addon"
            price="IDR 80.000"
          />
        </div>
      </section>
      <section className="bg-black-s1 relative z-30 mt-18 py-10">
        <div className="w-full lg:max-w-6xl mx-auto px-3">
          <div className="flex justify-between mb-7">
            <h3 className="font-semibold text-xl">Products</h3>
            <a href="" className="font-medium text-green-500">See All</a>
          </div>

          <CardHomeSlide />
        </div>
      </section>
      <section className="testimony relative z-29 -mt-1 -ms-1 py-20">
        <div className="w-full lg:max-w-4xl mx-auto px-3">
          <h1 className="text-center text-xl text-green-500 font-semibold">Testimonials</h1>
          <h2 className="text-center font-bold text-[40px]">What our user Say</h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10 place-content-center">
            <CardTestimonial />
            <CardTestimonial />
            <CardTestimonial classes="md:col-start-2" />
            <CardTestimonial classes="md:col-start-3" />
          </div>
        </div>
      </section>
      <section className="bg-black-e -mt-1 z-30 relative py-20 mb-40">
        <div className="w-full md:max-w-xl mx-auto px-3">
          <h1 className="text-center text-[40px] font-bold">
            Frequently Ask <span className="text-green-500">Questions</span>
          </h1>
          <p className="text-center text-white-f text-xl font-medium mt-2">This is most frequently asked questions, you can see more on the <a href="" className="text-green-500">FAQ page</a>.</p>
        </div>
        <div className="w-full md:max-w-3xl mx-auto px-3 mt-15 space-y-5">
          <Accordion
            title="Apa saja manfaat olahraga secara teratur bagi kesehatan tubuh?"
          />
          <Accordion
            title="What key features make this product stand out from its competitors?"
          />
          <Accordion
            title="What makes it unique compared to others?"
          />
          <Accordion
            title="How easy is it to use for someone with little to no technical experience?"
          />
        </div>
      </section>
    </>
  );
}
