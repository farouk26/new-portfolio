import React from "react"

function ColorfulButton({
  mainText,
  secondText,
  widthClasses,
  btnSize,
  fontSize,
}) {
  return (
    <div
      className={`button bg-midnight-teal btn ${btnSize} ${widthClasses} rounded-full overflow-hidden flex items-center justify-center cursor-pointer relative`}
    >
      <span
        className={`text-white-200 font-[400] ${fontSize} uppercase main-text`}
      >
        {mainText}
      </span>
      <span
        className={`text-white-200 font-[400] ${fontSize} uppercase additional-text`}
      >
        {secondText}
      </span>
    </div>
  )
}

export default ColorfulButton
