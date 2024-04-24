import animateProjects from "@/libs/carousel"
import Image from "next/image"
import { useEffect } from "react"
import ProjectCard from "../Cards/ProjectCard"

function Carousel() {
  useEffect(() => {
    animateProjects()
  }, [])

  return (
    <section className="min-h-fit w-full lg:block hidden">
      <div class="flex w-full vertical-slider flex-row gap-4">
        {/* First Column */}
        <div class="left-side">
          <div class="sticky xl:h-[33rem] lg:h-[30rem] h-full top-[15%]">
            <div
              class="image-wrapper absolute-full h-full w-full show"
              data-index="0"
            >
              <div class="mask-outer absolute-full">
                <div class="mask-inner absolute-full">
                  <Image
                    alt="project=img"
                    src="/images/project.png"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
            <div class="image-wrapper absolute-full" data-index="1">
              <div class="mask-outer absolute-full">
                <div class="mask-inner absolute-full">
                  <Image
                    alt="project-img"
                    src="/images/project1.png"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
            <div class="image-wrapper absolute-full" data-index="2">
              <div class="mask-outer absolute-full">
                <div class="mask-inner absolute-full">
                  <Image
                    alt="project-img"
                    src="/images/project2.png"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
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
              title={"Unify."}
              description={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
              }
              websiteType={"Community Sharing"}
              date={"2023"}
            />
          </section>
          <section class="content-wrapper" data-index="2">
            <ProjectCard
              title={"Unify."}
              description={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
              }
              websiteType={"Community Sharing"}
              date={"2023"}
            />
          </section>
          <section class="content-wrapper" data-index="2">
            <ProjectCard
              title={"Unify."}
              description={
                "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur quis quos harum vel veritatis modi libero nihil!"
              }
              websiteType={"Community Sharing"}
              date={"2023"}
            />
          </section>
        </div>
      </div>
    </section>
  )
}

export default Carousel
