import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./timepicker.css";

import { cn } from "@/utils/cn";

const MINUTES = Array.from({ length: 60 }, (_: unknown, i: number) => i);
const HOURS = Array.from({ length: 12 }, (_: unknown, i: number) => i + 1);
const TimePicker = () => {
  return (
    <div className={cn("h-[13rem]", "container", "px-[5.25rem]", "w-full")}>
      <Swiper
        grabCursor={true}
        className="h-[13rem]"
        mousewheel={false}
        slidesPerView={5}
        centeredSlides={true}
        loopAdditionalSlides={2}
        spaceBetween={16}
        direction="vertical"
        id="ampm"
      >
        {["오전", "오후"].map((item) => (
          <SwiperSlide className="h-[5.6rem]" key={item}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        grabCursor={true}
        loop={true}
        className="h-[13rem]"
        mousewheel={false}
        slidesPerView={5}
        centeredSlides={true}
        loopAdditionalSlides={2}
        spaceBetween={16}
        direction="vertical"
        id="hour-swiper"
      >
        {HOURS.map((item) => (
          <SwiperSlide className="h-[5.6rem]" key={item}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
      <span className={cn("flex", "items-center", "headline", "text-white")}>
        :
      </span>
      <Swiper
        grabCursor={true}
        loop={true}
        className="h-[13rem]"
        mousewheel={false}
        slidesPerView={5}
        centeredSlides={true}
        loopAdditionalSlides={2}
        spaceBetween={16}
        direction="vertical"
        id="minute-swiper"
      >
        {MINUTES.map((item) => (
          <SwiperSlide className="h-[5.6rem]" key={item}>
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TimePicker;
