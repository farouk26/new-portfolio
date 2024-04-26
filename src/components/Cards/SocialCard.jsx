import React from "react"

function SocialCard({ icon: IconComponent, title }) {
  return (
    <div className="lg:h-[4.5rem] h-[6.3rem] w-full bg-white-200 rounded-2xl flex lg:flex-row flex-col justify-center items-center lg:gap-4 gap-2 px-4 text-black">
      <span className="text-3xl">{IconComponent}</span>
      <p className="text-md font-[500]">{title}</p>
    </div>
  )
}

export default SocialCard
