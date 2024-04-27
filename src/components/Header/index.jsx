import React from "react"

function Header() {
  return (
    <section className="bg-white-200 rounded-3xl min-h-fit flex flex-col xl:p-7 p-4 gap-4">
      <div className="flex flex-col gap-4 text-black justify-center items-center 3xl:gap-8 lg:p-6">
        <h2 className="lg:text-3xl text-xl font-[400]">
          Hello,I&apos;m Farouk
        </h2>
        <h1 className="xl:text-[4.8rem] text-4xl font-[500] text-center xl:w-[90%] 3xl:w-[95%] 3xl:text-8xl xl:leading-tight lg:w-fit">
          I&apos;m bringing ideas to life with lasting impact
        </h1>
        <p className="text-xl w-full lg:w-1/2 xl:w-2/3 text-center">
          I create digital websites that focus on the user&apos;s needs and fit
          the strategy.
        </p>
      </div>
      <button className="btn btn-outline btn-md font-[400] lg:btn-lg uppercase rounded-full w-[85%] lg:w-[25%] xl:w-[20%] self-center mb-2 bg-black text-white-200">
        Contact Me
      </button>
    </section>
  )
}

export default Header
