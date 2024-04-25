import Image from "next/image"
import React from "react"

function CarouselImage({ imgUrl }) {
  return (
    <div class="mask-outer h-full">
      <div class="mask-inner h-full 2xl:px-5">
        <Image
          alt="project-img"
          src={imgUrl}
          width={1080}
          height={1080}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  )
}

export default CarouselImage
