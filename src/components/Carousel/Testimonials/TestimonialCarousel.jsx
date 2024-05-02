import { useRef, useState } from "react"
//import swiper
import { Swiper, SwiperSlide } from "swiper/react"
//import swiper css and css bundles
import "swiper/css"
import "swiper/css/bundle"
import { Pagination, Autoplay, Navigation } from "swiper/modules"
import TestimonialCard from "@/components/Cards/TestimonialCard"

function TestimonialCarousel() {
  return (
    <section className="w-full min-h-fit">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default TestimonialCarousel
