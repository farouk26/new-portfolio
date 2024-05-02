import React from "react"
import { useSwiper } from "swiper/react"
import { MdOutlineNavigateNext } from "react-icons/md"

function NextButton() {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="btn btn-circle btn-ghost bg-white-100 text-dark-200 text-4xl hover:bg-dark-200 hover:text-white-200"
    >
      <MdOutlineNavigateNext />
    </button>
  )
}

export default NextButton
