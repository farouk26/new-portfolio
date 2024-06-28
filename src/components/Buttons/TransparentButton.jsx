import React from "react"

function TransparentButton({ mainText, secondText, widthClasses, btnSize }) {
  return (
    <button
      class={`btn_transparent font-[500] btn ${btnSize} relative overflow-hidden cursor-pointer ${widthClasses} bg-transparent hover:bg-transparent btn-outline border-dark-200 hover:border-dark-200 text-dark-100 hover:text-dark-100 rounded-full uppercase`}
    >
      <span class="btn__top py-4 w-full">{mainText}</span>
      <span class="btn__bottom absolute w-full left-0 bottom-[100%] flex justify-center items-center h-full">
        {secondText}
      </span>
    </button>
  )
}

export default TransparentButton
