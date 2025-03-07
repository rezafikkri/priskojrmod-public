'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';

import CardHomeOther from './card-home-other';

export default function CardHomeSlide() {
  useEffect(() => {
    new Swiper(".mySwiper", {
      slidesPerView: "auto",
      spaceBetween: 15,
    });
  }, []);

  return (
    <div className="swiper mySwiper">
      <div className="swiper-wrapper">
        <CardHomeOther
          img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_5.jpg"
          name="50+ PES 2017 Menu Server V1 2024/25"
          price="Free"
        />
        <CardHomeOther
          img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_6.jpg"
          name="Piala Presiden 2024 - All In One Product"
          price="IDR 175.000"
          discount="50%"
        />
        <CardHomeOther
          img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_7.jpg"
          name="Sky Bet EFL Championship Scoreboard 2023/24"
          price="IDR 270.000"
        />
        <CardHomeOther
          img="https://res.cloudinary.com/priskojrmod/image/upload/q_auto/image_8.jpg"
          name="BRI Liga 1 INDONESIA New Edition 203/24"
          price="IDR 300.000"
        />
      </div>
    </div>
  );
}
