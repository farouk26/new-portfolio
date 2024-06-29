import React from "react"
import ColorfulButton from "../Buttons/ColorfulButton"

function Header() {
  return (
    <section className="bg-white-200 rounded-3xl min-h-fit flex flex-col xl:p-7 p-5 xl:gap-2 md:gap-8 gap-6">
      <div className="flex flex-col xl:gap-2 gap-5 text-black justify-center items-center 3xl:gap-7 lg:p-6">
        <h2 className="font-lora lg:text-3xl text-xl font-[400]">
          Hello, I&apos;m Farouk
        </h2>
        <h1 className="font-lora xl:text-6xl xl:leading-[5rem] md:text-5xl text-4xl font-[500] text-center xl:w-[95%] 2xl:w-full 3xl:w-[80%] 2xl:text-6xl 3xl:text-7xl 3xl:leading-tight lg:w-[75%] md:w-[80%]">
          Building web wonders that inspire and captivate.
        </h1>
        <p className="text-lg font-poppins md:text-2xl xl:text-xl 3xl:text-2xl w-full md:w-[60%] lg:w-[65%] xl:w-2/3 text-center">
          I create digital websites that focus on the user&apos;s needs and fit
          the strategy.
        </p>
      </div>
      <div className="w-full flex justify-center items-center">
        <ColorfulButton
          mainText={"Contact Me"}
          secondText={"Today"}
          widthClasses={"xl:w-[20%] 2xl:w-[25%] md:w-[25%] w-[82%]"}
          btnSize={"xl:btn-lg btn-md"}
          fontSize={"xl:text-lg md:text-md"}
        />
      </div>
    </section>
  )
}

export default Header
