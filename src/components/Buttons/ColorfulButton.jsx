import React from "react"

function ColorfulButton({
  mainText,
  secondText,
  widthClasses,
  btnSize,
  fontSize,
}) {
  return (
    <button
      className={`button bg-midnight-teal btn ${btnSize} ${widthClasses} rounded-full overflow-hidden flex items-center justify-center cursor-pointer relative`}
    >
      <span
        className={`text-white-200 font-[400] ${fontSize} uppercase main-text`}
      >
        {mainText}
      </span>
      <span
        className={`text-white-200 font-[400] ${fontSize} uppercase additional-text w-full`}
      >
        {secondText}
      </span>
    </button>
  )
}

export default ColorfulButton
