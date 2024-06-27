import React from "react"

function TransparentButton({ mainText, secondText, widthClasses }) {
  return (
    <button
      class={`btn_transparent font-[500] btn  relative overflow-hidden cursor-pointer ${widthClasses} bg-transparent hover:bg-transparent btn-outline border-dark-200 hover:border-dark-200 text-dark-100 hover:text-dark-100 rounded-full uppercase`}
    >
      <span class="btn__top p-4">{mainText}</span>
      <span class="btn__bottom absolute w-full left-0 bottom-[100%] flex justify-center items-center h-full">
        {secondText}
      </span>
    </button>
  )
}

export default TransparentButton
