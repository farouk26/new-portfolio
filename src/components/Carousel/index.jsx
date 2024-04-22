import Image from "next/image"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"

function Carousel() {
  return (
    <section className="min-h-fit w-full rounded-3xl flex lg:flex-col py-4">
      <div className="flex lg:flex-row flex-col h-full w-full gap-4 relative">
        {/* First Column */}
        <div className="h-full w-full flex flex-col gap-4 lg:sticky lg:top-[20%]">
          <figure className="xl:h-[33rem] lg:h-[30rem] h-full">
            <Image
              alt="project-img"
              src="/images/project1.png"
              priority
              width={900}
              height={900}
              className="w-full h-full object-cover object-center rounded-3xl shadow-md"
            />
          </figure>
        </div>
        {/* Second Column */}
        <div className="min-h-fit w-full flex flex-col gap-4">
          <ProjectCard
            title={"Unify."}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
            }
            websiteType={"Community Sharing"}
            date={"2023"}
          />
          <ProjectCard
            title={"Unify."}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
            }
            websiteType={"Community Sharing"}
            date={"2023"}
          />
          <ProjectCard
            title={"Unify."}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
            }
            websiteType={"Community Sharing"}
            date={"2023"}
          />
          <ProjectCard
            title={"Unify."}
            description={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
            }
            websiteType={"Community Sharing"}
            date={"2023"}
          />
        </div>
      </div>
    </section>
  )
}

export default Carousel
