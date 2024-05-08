import Image from "next/image"
import React from "react"

function MobileProjectCard({ title, description, date, websiteType, Url }) {
  return (
    <section className="min-h-fit w-full flex flex-col lg:gap-4 md:gap-4 gap-3 items-center">
      <div className="min-h-fit w-full bg-white-200 rounded-3xl shadow-lg">
        <figure className="lg:p-8 md:p-8 p-4">
          <Image
            src={Url}
            alt="project-image"
            height={1080}
            width={1080}
            className="rounded-2xl w-full h-full"
          />
        </figure>
      </div>
      <div className="min-h-fit w-full bg-white-200 rounded-3xl p-6 shadow-sm">
        <div className="lg:h-[10rem] h-[11rem] w-full flex flex-col lg:p-4 md:p-2 justify-between">
          <div className="flex justify-between gap-2">
            <p className="lg:text-md md:text-md text-sm uppercase font-[500] text-black">
              {websiteType}
            </p>
            <p className="lg:text-md md:text-md text-sm font-[500] text-black">
              {date}
            </p>
          </div>
          <div className="w-full flex flex-col gap-2">
            <h2 className="lg:text-xl md:text-3xl text-2xl font-[500] text-black">
              {title}
            </h2>
            <p className="md:text-md text-sm font-[400] text-black">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileProjectCard
