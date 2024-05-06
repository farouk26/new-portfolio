import React from "react"
import { IoArrowUpCircleOutline } from "react-icons/io5"

function Footer() {
  return (
    <section className="xl:min-h-[22rem] min-h-fit w-full bg-white-200 rounded-3xl flex xl:gap-8 gap-6 flex-col xl:pt-10 xl:pb-6 xl:px-4 p-6">
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
      <div className="flex w-full justify-center">
        <div className="xl:w-1/2 w-full flex xl:flex-row flex-col xl:justify-between items-center gap-8 my-5">
          <p className="text-dark-100 font-[400] text-xl">Projects</p>
          <p className="text-dark-100 font-[400] text-xl">About me</p>
          <p className="text-dark-100 font-[400] text-xl">Stack</p>
          <p className="text-dark-100 font-[400] text-xl">Contact</p>
        </div>
      </div>
      <div className="w-full h-full flex xl:flex-row xl:justify-between flex-col-reverse gap-5 items-center">
        <p className="text-dark-100 font-[400]">©2024 - All right reserved</p>
        <div className="flex gap-2 xl:flex-row flex-col-reverse items-center">
          <p className="text-dark-100 font-[400]">Back to Top</p>
          <IoArrowUpCircleOutline className="text-dark-100 text-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Footer
