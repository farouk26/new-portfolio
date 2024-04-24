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
      <div className="min-h-fit w-full flex flex-col gap-2 items-center p-4 lg:my-4 2xl:my-6 my-2">
        <h2 className="lg:text-5xl xl:text-6xl 2xl:text-7xl text-4xl font-semibold text-black">
          Selected Works
        </h2>
        <p className="lg:text-xl 2xl:text-2xl text-md text-black font-semibold">
          The Work I&apos;m Proud of
        </p>
      </div>
      <section className="lg:block hidden">
        <div class="flex w-full vertical-slider flex-row gap-4">
          {/* First Column */}
          <div class="left-side">
            <div class="sticky xl:h-[33rem] lg:h-[30rem] h-full top-[15%]">
              <div
                class="image-wrapper absolute-full h-full w-full show"
                data-index="0"
              >
                <CarouselImage imgUrl={"/images/neon.png"} />
              </div>
              <div class="image-wrapper absolute-full" data-index="1">
                <CarouselImage imgUrl={"/images/project.png"} />
              </div>
              <div class="image-wrapper absolute-full" data-index="2">
                <CarouselImage imgUrl={"/images/project1.png"} />
              </div>
              <div class="image-wrapper absolute-full" data-index="3">
                <CarouselImage imgUrl={"/images/project2.png"} />
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
                websiteType={"Mini Game"}
                date={"2023"}
              />
            </section>
            <section class="content-wrapper" data-index="3">
              <ProjectCard
                title={"Echo"}
                description={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
                }
                websiteType={"E-commerce"}
                date={"2023"}
              />
            </section>
          </div>
        </div>
      </section>
      <div className="w-full lg:my-8 my-5 flex justify-center">
        <button className="btn btn-outline border-black text-black uppercase rounded-full lg:w-[14rem] xl:w-[16rem] 2xl:w-[18rem] w-[60%]">
          View More
        </button>
      </div>
    </div>
  )
}

export default Carousel
