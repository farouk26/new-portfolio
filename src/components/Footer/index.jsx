import React from "react"
import { IoArrowUpCircleOutline } from "react-icons/io5"
import Socials from "../Socials"

function Footer() {
  return (
    <section className="min-h-fit w-full flex flex-col gap-4">
      <div className="xl:min-h-[22rem] min-h-fit w-full bg-white-200 rounded-3xl flex xl:gap-8 gap-4 flex-col xl:pt-10 xl:pb-6 xl:px-6 md:p-7 py-8 px-5">
        <div className="flex flex-col w-full h-full xl:gap-4 gap-3 items-center">
          <h2 className="xl:text-6xl lg:text-5xl text-4xl font-[400] text-dark-100 p-2 text-center font-lora">
            Ready to collaborate?
          </h2>
          <p className="xl:text-lg md:text-md text-sm text-dark-100 font-[300]">
            Drop your message here!
          </p>
          <p className="xl:text-3xl lg:text-2xl md:text-lg text-md font-[400] text-dark-100 underline">
            faroukwebdesign@gmail.com
          </p>
        </div>
        <div className="flex w-full justify-center">
          <div className="xl:w-1/2 md:w-[65%] md:flex-row w-full flex xl:flex-row flex-col md:justify-evenly xl:justify-between items-center md:gap-8 gap-4 md:my-4 my-2">
            <p className="text-dark-100 font-[400] xl:text-xl md:text-lg text-md">
              Projects
            </p>
            <p className="text-dark-100 font-[400] xl:text-xl md:text-lg text-md">
              About me
            </p>
            <p className="text-dark-100 font-[400] xl:text-xl md:text-lg text-md">
              Stack
            </p>
            <p className="text-dark-100 font-[400] xl:text-xl md:text-lg text-md">
              Contact
            </p>
          </div>
        </div>
        <div className="w-full h-full flex md:flex-row md:justify-between xl:flex-row xl:justify-between flex-col-reverse gap-5 items-center">
          <p className="text-dark-100 font-[400] xl:text-lg text-sm">
            ©2024 - All right reserved
          </p>
          <div className="flex gap-2 xl:flex-row md:flex-row flex-col-reverse items-center">
            <p className="text-dark-100 font-[400] xl:text-lg text-sm">
              Back to Top
            </p>
            <IoArrowUpCircleOutline className="text-dark-100 text-2xl" />
          </div>
        </div>
      </div>
      <Socials />
    </section>
  )
}

export default Footer
