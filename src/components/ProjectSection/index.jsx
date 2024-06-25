import React from "react"
import MobileProjectCard from "../Cards/MobileProjectCard"
import ProjectCard from "../Cards/ProjectCard"
import Link from "next/link"
import TransparentButton from "../Buttons/TransparentButton"

function ProjectSection() {
  return (
    <section className="min-h-fit w-full flex flex-col">
      <div className="min-h-fit w-full flex flex-col gap-2 items-center p-4 lg:my-4 2xl:my-6 my-2">
        <h2 className="lg:text-5xl xl:text-6xl 3xl:text-5xl text-4xl font-[500] text-black">
          Selected Works
        </h2>
        <p className="lg:text-xl xl:text-lg 3xl:text-2xl text-md text-black font-[400] text-center">
          The Work I&apos;m Proud of
        </p>
      </div>
      <div className="xl:flex xl:flex-row flex-col gap-4 hidden">
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
      <div className="xl:hidden flex flex-wrap md:gap-8 gap-6">
        <MobileProjectCard
          title={"Unify."}
          description={
            "An online platform fostering community by promoting the sharing and reuse of various items among members."
          }
          date={"2023"}
          websiteType={"Community Sharing"}
          Url={"/images/unify.png"}
        />
        <MobileProjectCard
          title={"Neon City"}
          description={
            "An interactive mini-game, allowing users to personalize pre-generated stories by filling in the blanks."
          }
          date={"2023"}
          websiteType={"Mini-Game"}
          Url={"/images/neoncity.png"}
        />
        <MobileProjectCard
          title={"Reelio"}
          description={
            "An innovative movie platform delivering seamless exploration of films and series for passionate enthusiasts."
          }
          date={"2023"}
          websiteType={"Movie Platform"}
          Url={"/images/reelio.png"}
        />
        <MobileProjectCard
          title={"Alibaba Lite"}
          description={
            "An e-commerce website delivering seamless browsing and purchasing experiences for a diverse array of products."
          }
          date={"2023"}
          websiteType={"E-commerce Website"}
          Url={"/images/alibabalite.png"}
        />
      </div>
      <div className="w-full xl:mt-10 mt-10 flex justify-center items-center">
        <Link
          className="w-fit"
          href={"/projects"}
          rel="noopener noreferrer"
          target="_blank"
        >
          <TransparentButton
            mainText={"View More"}
            secondText={"My Projects"}
          />
        </Link>
      </div>
    </section>
  )
}

export default ProjectSection
