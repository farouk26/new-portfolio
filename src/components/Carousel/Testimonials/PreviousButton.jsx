import React from "react"
import { MdOutlineNavigateBefore } from "react-icons/md"
import { useSwiper } from "swiper/react"

function PreviousButton() {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="btn btn-circle btn-ghost bg-white-100 text-dark-200 text-4xl hover:bg-dark-200 hover:text-white-200"
    >
      <MdOutlineNavigateBefore />
    </button>
  )
}

export default PreviousButton
