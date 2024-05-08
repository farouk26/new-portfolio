import React from "react"
import MobileProjectCard from "../Cards/MobileProjectCard"
import Carousel from "../Carousel"

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
      <div className="xl:block hidden">
        <Carousel />
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
      <div className="w-full xl:mt-8 mt-10 flex justify-center">
        <button className="btn btn-outline border-black text-black uppercase font-[500] rounded-full lg:w-[14rem] xl:w-[13rem] 3xl:w-[14rem] w-[60%]">
          View More
        </button>
      </div>
    </section>
  )
}

export default ProjectSection
