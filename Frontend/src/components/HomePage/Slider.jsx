'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

/* =====================
   SLIDES
===================== */
const items = [
  {
    id: 1,
    url: '/Home/Hero/Keerai (1).jpg',
    title: 'Misty Mountain Majesty',
  },
  {
    id: 2,
    url: '/Home/Hero/keerai.jpg',
    title: 'Winter Wonderland',
  },
  {
    id: 3,
    url: '/Home/Hero/Keerai (3).jpg',
    title: 'Autumn Mountain Retreat',
  },
  {
    id: 4,
    url: '/Home/Hero/Keerai (5).jpg',
    title: 'Tranquil Lake Reflection',
  },
];

export default function CrossfadeCarousel({ duration = 3000 }) {
  return (
    <div
      className="relative max-w-8xl mx-auto w-[95%] h-screen py-20
                 mt-10 mb-20  overflow-hidden"
    >
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        grabCursor={true}          // 👈 swipe hand cursor
        autoplay={{
          delay: duration,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.url}
              alt={item.title}
              className="w-full h-full object-cover rounded-[2.5rem]"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
