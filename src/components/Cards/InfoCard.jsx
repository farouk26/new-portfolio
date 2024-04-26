import React from "react"

function InfoCard({ icon: IconComponent, title, description }) {
  return (
    <div className="min-h-fit md:w-[33%] w-full rounded-3xl bg-white-200 flex flex-col p-6 gap-2">
      <span className="text-black 2xl:text-4xl text-3xl">{IconComponent}</span>
      <h2 className="3xl:text-xl 2xl:text-xl font-[500] text-black">
        {title}{" "}
      </h2>
      <p className="2xl:text-lg text-black font-400">{description}</p>
    </div>
  )
}

export default InfoCard
