import React from "react"
import MobileProjectCard from "../Cards/MobileProjectCard"
import Carousel from "../Carousel"

function ProjectSection() {
  return (
    <section className="min-h-fit w-full flex flex-col">
      <div className="min-h-fit w-full flex flex-col gap-2 items-center p-4 lg:my-4 2xl:my-6 my-2">
        <h2 className="lg:text-5xl xl:text-6xl 2xl:text-7xl text-4xl font-semibold text-black">
          Selected Works
        </h2>
        <p className="lg:text-xl 2xl:text-2xl text-md text-black font-semibold">
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
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officiis nesciunt qui error corporis temporibus nemo? In."
          }
          date={"2023"}
          websiteType={"Community Sharing"}
          Url={"/images/unify.png"}
        />
        <MobileProjectCard
          title={"Neon City"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officiis nesciunt qui error corporis temporibus nemo? In."
          }
          date={"2023"}
          websiteType={"Mini-Game"}
          Url={"/images/neoncity.png"}
        />
        <MobileProjectCard
          title={"Reelio"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officiis nesciunt qui error corporis temporibus nemo? In."
          }
          date={"2023"}
          websiteType={"Movie Platform"}
          Url={"/images/reelio.png"}
        />
        <MobileProjectCard
          title={"Portfolio"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officiis nesciunt qui error corporis temporibus nemo? In."
          }
          date={"2023"}
          websiteType={"Personal Template"}
          Url={"/images/portfolio.png"}
        />
      </div>
      <div className="w-full lg:my-8 my-5 flex justify-center">
        <button className="btn btn-outline border-black text-black uppercase rounded-full lg:w-[14rem] xl:w-[16rem] 2xl:w-[18rem] w-[60%]">
          View More
        </button>
      </div>
    </section>
  )
}

export default ProjectSection
