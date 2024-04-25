import Image from "next/image"
import React from "react"

function MobileProjectCard({ title, description, date, websiteType, Url }) {
  return (
    <section className="min-h-fit w-full flex flex-col gap-4 items-center">
      <figure className="w-full">
        <Image
          alt="project-img"
          src={Url}
          height={1080}
          width={1080}
          className="h-full w-full object-cover rounded-3xl"
        />
      </figure>
      <div className="min-h-fit w-full bg-white-200 rounded-3xl p-6 shadow-sm">
        <div className="lg:h-[10rem] h-[11rem] w-full flex flex-col lg:p-4 md:p-2 justify-between">
          <div className="flex justify-between gap-2">
            <p className="lg:text-md md:text-md text-sm uppercase font-semibold text-black">
              {websiteType}
            </p>
            <p className="lg:text-md md:text-md text-sm font-semibold text-black">
              {date}
            </p>
          </div>
          <div className="w-full flex flex-col p-2 gap-4">
            <h2 className="lg:text-xl md:text-3xl text-2xl font-semibold text-black">
              {title}
            </h2>
            <p className="md:text-md text-sm text-black">{description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MobileProjectCard
