import Image from "next/image"
import React from "react"

export default function ProjectDetailsCard() {
  return (
    <div className="w-full min-h-fit flex flex-col gap-4">
      {/* Pictures Section */}
      <div className="min-h-fit w-full flex lg:flex-row flex-col gap-4">
        <figure className="w-full">
          <Image
            alt="project_thumbnail"
            src={"/images/unify.png"}
            height={800}
            width={800}
            className="w-full h-full shadow-md object-cover rounded-3xl"
          />
        </figure>
        <figure className="w-full">
          <Image
            alt="project_thumbnail"
            src={"/images/reelio.png"}
            height={800}
            width={800}
            className="w-full h-full shadow-md object-cover rounded-3xl"
          />
        </figure>
      </div>
      {/* Header Section */}
      <div className="w-full min-h-fit bg-white-200 rounded-3xl flex flex-col gap-4 p-6 justify-center items-center">
        <h1 className="font-lora text-dark-100 text-7xl font-[600] w-[85%] text-center leading-tight p-2">
          Unify Community Platform
        </h1>
      </div>
      {/* Project Detail Section */}
      <div className="w-full min-h-full flex lg:flex-row flex-col gap-4">
        {/* 1st Column */}
        <div className="w-[30%] min-h-fit flex flex-col gap-4"></div>
        {/* 2nd Column */}
        <div className="w-[70%] min-h-fit flex flex-col gap-4">
          {/* Overview */}
        </div>
      </div>
    </div>
  )
}
