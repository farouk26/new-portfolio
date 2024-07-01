import React from "react"
import ColorfulButton from "../Buttons/ColorfulButton"

function Header() {
  return (
    <section className="bg-white-200 rounded-3xl min-h-fit flex flex-col gap-5 lg:gap-4 xl:gap-6 3xl:gap-7 xl:p-6 p-8">
      {/* Titles & Paragraph */}
      <div className="flex flex-col text-dark-100 items-center xl:p-4 gap-4 lg:gap-3 xl:gap-4 2xl:gap-6 3xl:gap-6">
        <h2 className="font-lora text-xl xl:text-2xl font-[500]">
          Hello, I&apos;m Farouk
        </h2>
        <h1 className="font-lora text-center md:text-5xl md:leading-tight 2xl:leading-tight xl:leading-tight 3xl:leading-tight lg:text-5xl xl:text-6xl 2xl:text-6xl 3xl:text-7xl text-4xl font-[600] w-full md:w-[95%] lg:w-[70%] lg:leading-tight xl:w-[90%] 3xl:w-[90%]">
          Building web wonders that inspire and captivate.
        </h1>
        <p className="font-poppins md:text-md text-sm md:w-[45%] w-[85%] lg:w-[50%] xl:w-[50%] 3xl:w-[80%] 2xl:w-[80%] text-center">
          I create digital websites that focus on the user&apos;s needs and fit
          the strategy.
        </p>
      </div>
      {/* Button */}
      <div className="w-full flex justify-center items-center">
        <ColorfulButton
          mainText={"Contact Me"}
          secondText={"Today"}
          widthClasses={"xl:w-[22%] 2xl:w-[25%] md:w-[40%] w-[85%]"}
          btnSize={"xl:btn-lg btn-md"}
          fontSize={"xl:text-lg md:text-md"}
        />
      </div>
    </section>
  )
}

export default Header
