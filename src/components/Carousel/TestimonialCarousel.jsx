import { useRef, useState } from "react"
//import swiper
import { Swiper, SwiperSlide } from "swiper/react"
//import swiper css and css bundles
import "swiper/css"
import "swiper/css/bundle"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import TestimonialCard from "../Cards/TestimonialCard"

function TestimonialCarousel() {
  return (
    <section className="w-full min-h-fit">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={false}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default TestimonialCarousel
