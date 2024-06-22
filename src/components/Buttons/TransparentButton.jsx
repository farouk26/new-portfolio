import React from "react"

function TransparentButton() {
  return (
    <button class="overflow-hidden relative w-[25%] btn btn-lg rounded-full bg-black text-white border-none font-bold cursor-pointer z-10 group text-center">
      Contact Me
      <span class="absolute w-full h-32 -top-8 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-110 transition-transform group-hover:duration-700 duration-700"></span>
      <span class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 z-10 text-center">
        Today
      </span>
    </button>
  )
}

export default TransparentButton
