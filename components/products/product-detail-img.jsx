'use client';

import { useEffect } from 'react';
import Swiper from 'swiper/bundle';
import 'swiper/css';

export default function ProductDetailImg() {
  useEffect(() => {
    const swiper = new Swiper(".thumbSwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });

    new Swiper(".mainSwiper", {
      zoom: true,
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }, []);

  return (
    <div className="w-full md:w-1/2 md:pe-6.5">
      <div className="relative">
        <div className="swiper mainSwiper">
          <div className="swiper-wrapper [&_img]:rounded-xl">
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_2.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/detail_1.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/detail_2.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/detail_3.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-zoom-container">
                <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/detail_4.jpg" />
              </div>
            </div>
          </div>
        </div>
        <div className="[&_button]:absolute [&_button]:top-1/2 [&_button]:z-2 [&_button]:-mt-3.5 [&_button]:bg-black-g [&_button]:flex [&_button]:p-1 [&_button]:rounded-lg [&_button]:text-white-i">
          <button className="swiper-button-next max-md:-right-3 md:-right-3.5 active:scale-[0.94]">
            <svg  xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={2}  strokeLinecap="round"  strokeLinejoin="round"  className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
          </button>
          <button className="swiper-button-prev max-lg:-left-3 lg:-left-3.5 active:scale-[0.94]">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M15 6l-6 6l6 6" /></svg>
          </button>
        </div>
      </div>
      <div className="swiper thumbSwiper mt-2.5">
        <div className="swiper-wrapper [&_img]:rounded-md [&>div]:hover:cursor-pointer">
          <div className="swiper-slide">
            <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_2.jpg" />
          </div>
          <div className="swiper-slide">
            <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/detail_1.jpg" />
          </div>
          <div className="swiper-slide">
            <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/detail_2.jpg" />
          </div>
          <div className="swiper-slide">
            <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/detail_3.jpg" />
          </div>
          <div className="swiper-slide">
            <img src="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/detail_4.jpg" />
          </div>
        </div>
      </div>

      <div className="flex text-white-q leading-4.5 mt-5">
        <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor"  strokeWidth={1.5}  strokeLinecap="round"  strokeLinejoin="round"  className="icon me-1"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M12 9h.01" /><path d="M11 12h1v4h1" /></svg>
        <small className="flex-1">Double click large image to zoom. To see more images, click the next or previous buttons or swipe the large image left and right. You can also swipe the thumbnails and click on one to view it.</small>
      </div>
    </div>
  );
}
