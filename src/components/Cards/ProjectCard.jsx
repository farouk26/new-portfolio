import React from "react"

function ProjectCard({ websiteType, date, title, description }) {
  return (
    <div className="min-h-fit w-full bg-white-200 rounded-3xl p-6">
      <div className="min-h-[19rem] w-full flex flex-col p-4 justify-between">
        <div className="flex justify-between gap-2">
          <p className="text-lg font-semibold text-black">{websiteType}</p>
          <p className="text-lg font-semibold text-black">{date}</p>
        </div>
        <div className="w-full flex flex-col p-2 gap-4">
          <h2 className="text-4xl font-semibold text-black">{title}</h2>
          <p className="text-md text-black">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
