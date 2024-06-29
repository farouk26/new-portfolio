import Image from "next/image"
import React from "react"

function ProjectCardPc({ title, Url, description, date, webType }) {
  return (
    <div className="min-h-fit w-full flex flex-col gap-4">
      <figure className="w-full p-5 bg-white-200 rounded-3xl">
        <Image
          alt="project-thumbnail"
          src={Url}
          height={1080}
          width={1080}
          priority
          className="w-full h-full object-cover rounded-2xl"
        />
      </figure>
      <div className="w-full flex flex-col justify-between xl:h-[15.95rem] 3xl:h-[16rem] bg-white-200 rounded-3xl p-7">
        <div className="flex justify-between p-2 font-poppins">
          <p className="text-dark-100 uppercase text-md font-[500]">
            {webType}
          </p>
          <p className="text-md text-dark-100 font-[500]">{date}</p>
        </div>
        <div className="flex flex-col min-h-fit gap-4 p-2">
          <h2 className="text-dark-100 font-[600] text-3xl font-lora">
            {title}
          </h2>
          <p className="text-dark-100 text-md font-[400] font-poppins">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCardPc
