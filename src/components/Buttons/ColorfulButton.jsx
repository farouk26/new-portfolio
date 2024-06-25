import React from "react"

function ColorfulButton({ mainText, secondText }) {
  return (
    <div className="button bg-midnight-teal btn xl:btn-lg btn-md xl:w-[20%] md:w-[25%] w-[85%] rounded-full overflow-hidden flex items-center justify-center cursor-pointer relative">
      <span className="text-white-200 font-[400] text-lg uppercase main-text">
        {mainText}
      </span>
      <span className="text-white-200 font-[400] text-lg uppercase additional-text">
        {secondText}
      </span>
    </div>
  )
}

export default ColorfulButton
