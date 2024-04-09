import React from "react"
import { HiMenuAlt4 } from "react-icons/hi"
import Image from "next/image"

function Navbar() {
  return (
    <div className="navbar bg-white-200 rounded-full mt-8 px-6">
      <div className="navbar-start text-black flex gap-2 items-center">
        <HiMenuAlt4 className="text-xl" />
        <p className="uppercase font-semibold">Menu</p>
      </div>

      <div className="navbar-center">
        <figure className="w-[3.8rem]">
          <Image
            src={"/images/logo2.png"}
            alt="logo"
            height={250}
            width={250}
            className="w-full h-full object-fit"
          />
        </figure>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost rounded-full border-dark-100 uppercase text-black font-semibold">
          Contact Me
        </button>
      </div>
    </div>
  )
}

export default Navbar
