import Image from "next/image"
import React from "react"
import NextButton from "../Carousel/Testimonials/NextButton"
import PreviousButton from "../Carousel/Testimonials/PreviousButton"

function TestimonialCard() {
  return (
    <div className="w-full min-h-[18rem] rounded-3xl bg-white-200 shadow-md xl:p-8 p-4  flex xl:flex-col flex-col-reverse justify-between">
      <div className="w-full min-h-fit p-2">
        <p className="xl:text-2xl text-md font-[400] text-black">
          Farouk has the gift of making mundane designs into coded art. With his
          amazing attention to details, great commitment and fruitful teamwork,
          I only see a great and exceptional developer. I was honored to have a
          collaboration in Unify with him.
        </p>
      </div>
      <div className="w-full h-full flex justify-between items-center">
        <div className="w-full flex gap-3 min-h-fit p-1">
          <figure className="w-16">
            <Image
              alt="avatar"
              src={"/images/darinetag.png"}
              height={500}
              width={500}
              priority
              className="w-full h-full object-cover rounded-full object-center"
            />
          </figure>
          <div className="flex justify-between w-full min-h-fit items-center">
            <div className="flex flex-col">
              <h2 className="text-lg font-[400] text-center text-black">
                Hadia Djadallah
              </h2>
              <p className="text-sm font-[300] text-gray-600 text-center">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <PreviousButton />
          <NextButton />
        </div>
      </div>
    </div>
  )
}

export default TestimonialCard
