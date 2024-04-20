import Image from "next/image"
import React from "react"
import ProjectCard from "../Cards/ProjectCard"

function Carousel() {
  return (
    <section className="min-h-fit w-full bg-red-200 rounded-3xl flex lg:flex-col lg:p-8 p-2 relative">
      <div className="flex lg:flex-row flex-col h-full w-full gap-3 bg-yellow-200">
        {/* First Column */}
        <div className="h-full w-full flex flex-col gap-4">
          <figure className="lg:h-[30rem] h-full">
            <Image
              alt="project-img"
              src="/images/project.png"
              priority
              width={600}
              height={600}
              className="w-full h-full object-cover object-center rounded-3xl shadow-md"
            />
          </figure>
        </div>
        {/* Second Column */}
        <div className="min-h-fit w-full bg-blue-200 flex flex-col gap-4">
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
