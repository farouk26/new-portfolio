import Image from "next/image"
import React from "react"

function CarouselImage({ imgUrl }) {
  return (
    <div class="mask-outer absolute-full">
      <div class="mask-inner absolute-full">
        <Image
          alt="project-img"
          src={imgUrl}
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-3xl"
        />
      </div>
    </div>
  )
}

export default CarouselImage
