import React from "react"

function Header() {
  return (
    <section className="bg-white-200 rounded-3xl min-h-fit flex flex-col xl:p-7 p-4 gap-2">
      <div className="flex flex-col xl:gap-2 gap-5 text-black justify-center items-center 3xl:gap-8 lg:p-6">
        <h2 className="lg:text-3xl text-xl font-[400]">
          Hello, I&apos;m Farouk
        </h2>
        <h1 className="xl:text-7xl xl:leading-[5rem] text-4xl font-[500] text-center xl:w-[92%] 2xl:w-full 3xl:w-[95%] 2xl:text-6xl 3xl:text-7xl 3xl:leading-tight lg:w-fit">
          Building web wonders that inspire and captivate.
        </h1>
        <p className="text-xl w-full lg:w-1/2 xl:w-2/3 text-center">
          I create digital websites that focus on the user&apos;s needs and fit
          the strategy.
        </p>
      </div>
      <button className="btn btn-outline btn-md font-[400] lg:btn-lg uppercase rounded-full w-[85%] lg:w-[25%] xl:w-[20%] 2xl:w-[25%] self-center mb-2 bg-black text-white-200">
        Contact Me
      </button>
    </section>
  )
}

export default Header
