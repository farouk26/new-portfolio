import React from "react"
import { useSwiper } from "swiper/react"
import { MdOutlineNavigateNext } from "react-icons/md"

function NextButton() {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slideNext()}
      className="btn btn-circle btn-ghost bg-midnight-teal text-white-200 text-4xl hover:bg-midnight-green hover:text-white-200"
    >
      <MdOutlineNavigateNext />
    </button>
  )
}

export default NextButton
