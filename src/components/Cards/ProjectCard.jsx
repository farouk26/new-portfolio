import React from "react"

function ProjectCard({ websiteType, date, title, description }) {
  return (
    <div className="min-h-fit w-full bg-white-200 rounded-3xl p-6 shadow-sm">
      <div className="xl:min-h-[18rem] 2xl:min-h-[22rem] lg:h-[10rem] h-[11rem] w-full flex flex-col lg:p-4 md:p-2 justify-between">
        <div className="flex justify-between gap-2">
          <p className="lg:text-md xl:text-lg md:text-md text-sm uppercase font-semibold text-black">
            {websiteType}
          </p>
          <p className="lg:text-md md:text-md xl:text-lg text-sm font-semibold text-black">
            {date}
          </p>
        </div>
        <div className="w-full flex flex-col p-2 gap-4">
          <h2 className="lg:text-xl xl:text-3xl md:text-3xl text-2xl font-semibold text-black">
            {title}
          </h2>
          <p className="md:text-md text-sm text-black">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
