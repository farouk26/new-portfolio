import React from "react"
import { IoArrowUpCircleOutline } from "react-icons/io5"

function Footer() {
  return (
    <section className="3xl:min-h-[22rem] min-h-fit w-full bg-white-200 rounded-3xl gap-8 flex flex-col justify-between xl:pt-10 xl:pb-5 xl:px-6 p-5">
      <div className="flex flex-col w-full h-full gap-4 items-center">
        <h2 className="xl:text-6xl lg:text-5xl text-4xl font-[400] text-dark-100 p-2 text-center">
          Ready to collaborate?
        </h2>
        <p className="text-lg text-dark-100 font-[300]">
          Drop your message here!
        </p>
        <p className="xl:text-3xl lg:text-2xl text-xl font-[400] text-dark-100 underline">
          faroukwebdesign@gmail.com
        </p>
      </div>
      <div className="flex xl:w-1/2 xl:justify-between xl:flex-none flex-col items-center w-full gap-4">
        <p className="text-dark-100 font-[400] text-xl">Projects</p>
        <p className="text-dark-100 font-[400] text-xl">About me</p>
        <p className="text-dark-100 font-[400] text-xl">Stack</p>
        <p className="text-dark-100 font-[400] text-xl">Contact</p>
      </div>
      <div className="w-full h-full flex xl:justify-between xl:flex-noone gap-5 items-center">
        <p className="text-dark-100 font-[400]">©2024 - All right reserved</p>
        <div className="flex xl:flex-none flex-col-reverse gap-2 items-center">
          <p className="text-dark-100 font-[400]">Back to Top</p>
          <IoArrowUpCircleOutline className="text-dark-100 text-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Footer
