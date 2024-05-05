import React from "react"
import { IoArrowUpCircleOutline } from "react-icons/io5"

function Footer() {
  return (
    <section className="min-h-[22rem] w-full bg-white-200 rounded-3xl flex flex-col justify-between pt-10 pb-5 px-6">
      <div className="flex flex-col w-full h-full gap-4 items-center">
        <h2 className="text-6xl font-[400] text-dark-100 p-2">
          Ready to collaborate?
        </h2>
        <p className="text-lg text-dark-100 font-[300]">
          Drop your message here!
        </p>
        <p className="text-3xl font-[400] text-dark-100 underline">
          faroukwebdesign@gmail.com
        </p>
      </div>
      <div className="flex w-1/2 justify-between self-center">
        <p className="text-dark-100 font-[400] text-xl">Projects</p>
        <p className="text-dark-100 font-[400] text-xl">About me</p>
        <p className="text-dark-100 font-[400] text-xl">Stack</p>
        <p className="text-dark-100 font-[400] text-xl">Contact</p>
      </div>
      <div className="w-full h-full flex justify-between">
        <p className="text-dark-100 font-[400]">©2024 - All right reserved</p>
        <div className="flex gap-2 items-center">
          <p className="text-dark-100 font-[400]">Back to Top</p>
          <IoArrowUpCircleOutline className="text-dark-100 text-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Footer
