import Image from "next/image"
import React from "react"

function CarouselImage({ imgUrl }) {
  return (
    <div className="mask-outer h-full">
      <div className="mask-inner h-full">
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
