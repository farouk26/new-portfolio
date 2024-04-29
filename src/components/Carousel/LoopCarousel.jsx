import loopFunction from "@/libs/loop"
import Image from "next/image"
import React, { useEffect } from "react"
import { LiaLinkedinIn } from "react-icons/lia"

function LoopCarousel() {
  useEffect(() => {
    loopFunction()
  }, [])

  return (
    <section className="w-full min-h-fit">
      <div className="logos flex">
        <div className="logos-slide flex justify-between">
          <figure className="w-32">
            <Image
              alt=""
              src={"/images/design.svg"}
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="w-32">
            <Image
              alt=""
              src={"/images/frontend.svg"}
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="w-32">
            <Image
              alt=""
              src={"/images/mobilef.svg"}
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="w-32">
            <Image
              alt=""
              src={"/images/pixel.svg"}
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="w-32">
            <Image
              alt=""
              src={"/images/quality.svg"}
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="w-32">
            <Image
              alt=""
              src={"/images/uiux.svg"}
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </figure>
          <figure className="w-28">
            <Image
              alt=""
              src={"/images/webdev.svg"}
              height={500}
              width={500}
              className="w-full h-full object-cover"
            />
          </figure>
        </div>
      </div>
    </section>
  )
}

export default LoopCarousel
