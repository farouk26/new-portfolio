import React from "react"
import { MdOutlineNavigateBefore } from "react-icons/md"
import { useSwiper } from "swiper/react"

function PreviousButton() {
  const swiper = useSwiper()
  return (
    <button
      onClick={() => swiper.slidePrev()}
      className="btn btn-circle btn-ghost bg-midnight-teal text-white-200 text-4xl hover:bg-midnight-green hover:text-white-200"
    >
      <MdOutlineNavigateBefore />
    </button>
  )
}

export default PreviousButton
