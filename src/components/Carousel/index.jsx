import animateProjects from "@/libs/carousel"
import { useEffect } from "react"
import ProjectCard from "../Cards/ProjectCard"
import CarouselImage from "./CarouselImage"

function Carousel() {
  useEffect(() => {
    animateProjects()
  }, [])

  return (
    <div className="min-h-fit w-full">
      <div className="flex w-full vertical-slider flex-row gap-4 2xl:gap-0">
        {/* First Column */}
        <div className="left-side">
          <div className="sticky xl:h-[33rem] lg:h-[30rem] top-[15%]">
            <div className="image-wrapper absolute-full show" data-index="0">
              <CarouselImage imgUrl={"/images/unify.png"} />
            </div>
            <div className="image-wrapper absolute-full" data-index="1">
              <CarouselImage imgUrl={"/images/reelio.png"} />
            </div>
            <div className="image-wrapper absolute-full" data-index="2">
              <CarouselImage imgUrl={"/images/neoncity.png"} />
            </div>
            <div className="image-wrapper absolute-full" data-index="3">
              <CarouselImage imgUrl={"/images/alibabalite.png"} />
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div className="right-side min-h-fit flex w-full flex-col gap-4">
          <section className="content-wrapper" data-index="0">
            <ProjectCard
              title={"Unify."}
              description={
                "An online platform fostering community by promoting the sharing and reuse of various items among members."
              }
              websiteType={"Community Sharing"}
              date={"2023"}
            />
          </section>
          <section className="content-wrapper" data-index="1">
            <ProjectCard
              title={"Reelio"}
              description={
                "An innovative movie platform delivering seamless exploration of films and series for passionate enthusiasts."
              }
              websiteType={"Movie Platform"}
              date={"2023"}
            />
          </section>
          <section className="content-wrapper" data-index="2">
            <ProjectCard
              title={"Neon City"}
              description={
                "An interactive mini-game, allowing users to personalize pre-generated stories by filling in the blanks."
              }
              websiteType={"Mini-Game"}
              date={"2023"}
            />
          </section>
          <section className="content-wrapper" data-index="3">
            <ProjectCard
              title={"Alibaba Lite"}
              description={
                "An e-commerce website delivering seamless browsing and purchasing experiences for a diverse array of products."
              }
              websiteType={"E-commerce"}
              date={"2023"}
            />
          </section>
        </div>
      </div>
    </div>
  )
}

export default Carousel
