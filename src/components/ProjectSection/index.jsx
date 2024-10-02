import React from "react"
import MobileProjectCard from "../Cards/MobileProjectCard"
import ProjectCard from "../Cards/ProjectCard"
import Link from "next/link"
import TransparentButton from "../Buttons/TransparentButton"

function ProjectSection() {
  return (
    <section className="min-h-fit w-full flex flex-col">
      <div className="min-h-fit w-full flex flex-col gap-2 items-center p-4 lg:my-4 2xl:my-6 my-1 font-lora">
        <h2 className="lg:text-5xl xl:text-5xl 3xl:text-5xl md:text-4xl text-3xl font-[600] text-black text-center">
          Selected Works
        </h2>
        <p className="lg:text-xl xl:text-lg 3xl:text-xl md:text-md text-sm text-black font-[400] text-center font-poppins">
          The Work I&apos;m Proud of
        </p>
      </div>
      <div className="flex xl:flex-row flex-col gap-4">
        <ProjectCard
          title={"Unify."}
          Url={"/images/unify.png"}
          description={
            "An online platform fostering community by promoting the sharing and reuse of various items among members."
          }
          webType={"Community Sharing"}
          date={"2023"}
        />
        <ProjectCard
          title={"Reelio"}
          Url={"/images/reelio.png"}
          description={
            "An innovative movie platform delivering seamless exploration of films and series for passionate enthusiasts."
          }
          webType={"Movie Platform"}
          date={"2023"}
        />
      </div>
      <div className="w-full xl:mt-10 mt-8">
        <Link
          className="w-full  flex justify-center items-center"
          href={"/projects"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <TransparentButton
            mainText={"View More"}
            secondText={"My Projects"}
            widthClasses={
              "lg:w-[14rem] xl:w-[13rem] md:w-[15rem] 3xl:w-[14rem] w-[65%]"
            }
          />
        </Link>
      </div>
    </section>
  )
}

export default ProjectSection
