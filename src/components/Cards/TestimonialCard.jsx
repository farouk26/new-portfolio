import Image from "next/image"
import React from "react"
import NextButton from "../Carousel/Testimonials/NextButton"
import PreviousButton from "../Carousel/Testimonials/PreviousButton"

function TestimonialCard({ title, description, imgUrl, subtitle }) {
  return (
    <div className="h-full w-full">
      <div className="bg-white-200 flex xl:flex-col flex-col-reverse rounded-3xl xl:min-h-[19rem] lg:h-[16rem] md:h-[15rem] h-[24rem] xl:p-8 p-5 xl:justify-between gap-1">
        <div className="h-full w-full p-2">
          <p className="xl:text-2xl lg:text-lg text-md font-[400] text-dark-100">
            {description}
          </p>
        </div>
        <div className="w-full min-h-fit flex justify-between px-2">
          <div className="flex items-center min-h-fit gap-3">
            <figure className="xl:w-16 xl:h-16 w-14 h-14">
              <Image
                alt="avatar"
                src={imgUrl}
                height={500}
                width={500}
                className="w-full h-full object-cover rounded-full"
              />
            </figure>
            <div>
              <h2 className="text-lg font-[500] text-dark-100">{title}</h2>
              <p className="text-sm text-gray-600 font-[300]">{subtitle}</p>
            </div>
          </div>
          <div className="xl:flex gap-2 items-center hidden">
            <PreviousButton />
            <NextButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
