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
      <div class="flex w-full vertical-slider flex-row gap-4 2xl:gap-0">
        {/* First Column */}
        <div class="left-side">
          <div class="sticky xl:h-[33rem] lg:h-[30rem] top-[15%]">
            <div class="image-wrapper absolute-full show" data-index="0">
              <CarouselImage imgUrl={"/images/unify.png"} />
            </div>
            <div class="image-wrapper absolute-full" data-index="1">
              <CarouselImage imgUrl={"/images/reelio.png"} />
            </div>
            <div class="image-wrapper absolute-full" data-index="2">
              <CarouselImage imgUrl={"/images/neoncity.png"} />
            </div>
            <div class="image-wrapper absolute-full" data-index="3">
              <CarouselImage imgUrl={"/images/portfolio.png"} />
            </div>
          </div>
        </div>
        {/* Second Column */}
        <div class="right-side min-h-fit flex w-full flex-col gap-4">
          <section className="content-wrapper" data-index="0">
            <ProjectCard
              title={"Unify."}
              description={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
              }
              websiteType={"Community Sharing"}
              date={"2023"}
            />
          </section>
          <section className="content-wrapper" data-index="1">
            <ProjectCard
              title={"Reelio"}
              description={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
              }
              websiteType={"Movie Platform"}
              date={"2023"}
            />
          </section>
          <section class="content-wrapper" data-index="2">
            <ProjectCard
              title={"Neon City"}
              description={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
              }
              websiteType={"Mini-Game"}
              date={"2023"}
            />
          </section>
          <section class="content-wrapper" data-index="3">
            <ProjectCard
              title={"Portfolio"}
              description={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
              }
              websiteType={"Personal Template"}
              date={"2023"}
            />
          </section>
        </div>
      </div>
      <div className="w-full lg:my-8 my-5 flex justify-center">
        <button className="btn btn-outline border-black text-black uppercase rounded-full lg:w-[14rem] xl:w-[16rem] 2xl:w-[18rem] w-[60%]">
          View More
        </button>
      </div>
    </div>
  )
}

export default Carousel
