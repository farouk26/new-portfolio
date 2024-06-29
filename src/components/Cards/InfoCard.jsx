import React from "react"

function InfoCard({ icon: IconComponent, title, description }) {
  return (
    <div className="min-h-fit md:w-[33%] w-full rounded-3xl bg-white-200 flex flex-col p-6 gap-2 font-lora">
      <span className="text-dark-100 2xl:text-4xl text-3xl">
        {IconComponent}
      </span>
      <h2 className="3xl:text-xl 2xl:text-xl md:text-lg font-[600] text-black">
        {title}
      </h2>
      <p className="text-md text-black font-[400] font-poppins">
        {description}
      </p>
    </div>
  )
}

export default InfoCard
