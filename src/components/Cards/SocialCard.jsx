import React from "react"

function SocialCard({
  icon: IconComponent,
  title,
  icon_2: IconComponent_2,
  title_2,
}) {
  return (
    <div className="social-card lg:h-[4.5rem] h-[6.3rem] w-full bg-white-200 rounded-2xl p-2 cursor-pointer">
      {/* Parent Container */}
      <div className="w-full h-full flex xl:flex-row flex-col gap-2 justify-center items-center">
        {/* Sub Container */}
        <div className="w-full min-h-fit flex justify-center">
          {/* Container that has both Icons container and titles container */}
          <div className="relative flex xl:flex-row flex-col gap-2 w-full justify-center items-center overflow-hidden">
            {/* Icons Container */}
            <div className="flex flex-col overflow-hidden parent_container">
              <span className="top-element text-2xl text-dark-100">
                {IconComponent}
              </span>
              <span className="bottom-element absolute bottom-full text-2xl text-dark-100 lg:block hidden">
                {IconComponent_2}
              </span>
            </div>
            {/* Titles Container */}
            <div className="parent_container">
              <p className="top-element_1 font-poppins text-md text-dark-100 font-[400]">
                {title}
              </p>
              <p className="bottom-element_1 font-poppins absolute top-full text-md text-dark-100 font-[400] lg:block hidden">
                {title_2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SocialCard
