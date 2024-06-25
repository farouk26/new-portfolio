import React from "react"

function TransparentButton({ mainText, secondText }) {
  return (
    <button class="btn_transparent font-[500] btn lg:w-[14rem] xl:w-[13rem] 3xl:w-[14rem] w-[60%] relative overflow-hidden cursor-pointer bg-transparent hover:bg-transparent btn-outline border-dark-200 hover:border-dark-200 text-dark-100 hover:text-dark-100 rounded-full uppercase">
      <span class="btn__top p-4">{mainText}</span>
      <span class="btn__bottom absolute w-full left-0 bottom-[100%] flex justify-center items-center h-full">
        {secondText}
      </span>
    </button>
  )
}

export default TransparentButton
