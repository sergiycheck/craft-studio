"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

const image_400x600 = "https://picsum.photos/400/600";

export function SwiperAchievements() {
  return (
    <div className="max-w-[600px]" data-aos="fade-up">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 100,
          modifier: 5.5,
          slideShadows: false,
        }}
        creativeEffect={{
          next: {
            translate: [0, 0, -400],
          },
        }}
        modules={[EffectCoverflow]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={image_400x600} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_400x600} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_400x600} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_400x600} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_400x600} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_400x600} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_400x600} alt="slide_image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
