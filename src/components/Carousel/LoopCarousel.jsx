import loopFunction from "@/libs/loop"
import Image from "next/image"
import { useEffect } from "react"
import LoopCarouselImage from "./LoopCarouselImage"

function LoopCarousel() {
  useEffect(() => {
    loopFunction()
  }, [])

  return (
    <div className="scroller" data-direction="left" data-speed="fast">
      <div className="scroller__inner">
        <LoopCarouselImage />
      </div>
    </div>
  )
}

export default LoopCarousel
