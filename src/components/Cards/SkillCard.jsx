import React from "react"
import { TbBrandNextjs } from "react-icons/tb"

function SkillCard({ icon: IconComponent, description, title }) {
  return (
    <div className="h-[17rem] w-full bg-white-200 rounded-3xl p-8">
      <div className="flex flex-col gap-4 h-full w-full p-2 justify-between">
        <span className="text-5xl text-black">{IconComponent}</span>
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-2xl text-black font-[500]">{title}</h2>
          <p className="text-md text-black">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default SkillCard
