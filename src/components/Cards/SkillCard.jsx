import React from "react"
import { TbBrandNextjs } from "react-icons/tb"

function SkillCard({ icon: IconComponent, description, title }) {
  return (
    <div className="h-[100%] w-full bg-white-200 rounded-3xl xl:p-8 p-4">
      <div className="flex flex-col h-full w-full xl:gap-7 gap-4 p-2">
        <span className="xl:text-5xl text-4xl text-black">{IconComponent}</span>
        <div className="w-full flex flex-col gap-2 h-full">
          <h2 className="xl:text-2xl text-lg text-black font-[500]">{title}</h2>
          <p className="md:text-md text-black w-full">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
