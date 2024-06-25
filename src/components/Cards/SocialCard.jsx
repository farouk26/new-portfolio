import React from "react"

function SocialCard({
  icon: IconComponent,
  title,
  icon_2: IconComponent_2,
  title_2,
}) {
  return (
    <div className="social-card lg:h-[4.5rem] h-[6.3rem] w-full bg-white-200 rounded-2xl">
      <div className="w-full h-full flex lg:flex-row flex-col justify-center items-center lg:gap-2 gap-2">
        <div className="icon-container relative overflow-hidden">
          <span className="top-icon text-2xl text-dark-100">
            {IconComponent}
          </span>
          <span className="bottom-icon absolute left-0 bottom-full text-2xl text-dark-100">
            {IconComponent_2}
          </span>
        </div>
        <div className="title-container relative overflow-hidden min-w-fit max-w-fit">
          <p className="top-title text-md text-dark-100 font-[400]">{title}</p>
          <p className="bottom-title absolute left-0 top-full text-md text-dark-100 font-[400]">
            {title_2}
          </p>
        </div>
      </div>
    </div>
  )
}

export default SocialCard
