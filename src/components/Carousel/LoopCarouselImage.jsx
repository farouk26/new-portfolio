import Image from "next/image"
import React from "react"

function LoopCarouselImage() {
  return (
    <div className="min-h-fit min-w-fit flex overflow-x-hidden">
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/design.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/pixel.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/webdev.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/quality.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/uiux.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/frontend.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/mobilef.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/api.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/seo.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/cicd.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
      <figure className="w-32">
        <Image
          alt="logo"
          src={"/images/typography.svg"}
          height={500}
          width={500}
          className="w-full h-full object-cover"
        />
      </figure>
    </div>
  )
}

export default LoopCarouselImage
