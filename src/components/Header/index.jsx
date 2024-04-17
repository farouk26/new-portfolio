import React from "react"

function Header() {
  return (
    <section className="bg-white-200 rounded-3xl min-h-fit flex flex-col p-6 gap-4">
      <div className="flex flex-col gap-6 text-black justify-center items-center lg:p-6">
        <h2 className="lg:text-3xl text-2xl font-semibold">
          Hello, I&apos;m Farouk
        </h2>
        <h1 className="lg:text-7xl text-5xl font-semibold text-center w-full lg:w-fit">
          Im bringing ideas to life with lasting impact
        </h1>
        <p className="text-xl w-full lg:w-1/2 text-center">
          I create digital websites that focus on the users needs and fit the
          strateghy
        </p>
      </div>
      <button className="btn btn-outline btn-md lg:btn-lg uppercase rounded-full w-full lg:w-[25%] self-center mb-2 bg-black text-white-200">
        Contact Me
      </button>
    </section>
  )
}

export default Header
