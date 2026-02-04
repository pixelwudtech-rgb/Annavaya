'use client';
import React from 'react';
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
} from '@/components/ui/carousel';

import Autoplay from 'embla-carousel-autoplay';

const images = [
  "https://plus.unsplash.com/premium_photo-1663054611245-7d18f36e1cfa?w=500&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1723478480754-436a04e21412?w=500&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1677700375016-efecc99bc526?w=500&auto=format&fit=crop&q=60",
  "https://plus.unsplash.com/premium_photo-1663012897492-ac02b4c78c02?w=500&auto=format&fit=crop&q=60",
];

function Index() {
  const OPTIONS = { loop: true };

  return (
    <Carousel
      options={OPTIONS}
      className="w-4/5 mx-auto"
      plugins={[
        Autoplay({
          delay: 3000,
          playOnInit: true,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
    >
      <SliderContainer className="gap-2">
        {images.map((src, i) => (
          <Slider key={i} className="w-full">
            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
              <Image
                src={src}
                alt={`Slide ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0}
              />
            </div>
          </Slider>
        ))}
      </SliderContainer>

      <div className="flex justify-center py-4">
        <SliderDotButton />
      </div>
    </Carousel>
  );
}

export default Index;
