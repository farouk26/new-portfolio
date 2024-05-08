import MobileProjectCard from "@/components/Cards/MobileProjectCard"
import ProjectCardPc from "@/components/Cards/ProjectCardPc"
import Layout from "@/components/Layout"
import React from "react"

function ProjectPage() {
  return (
    <section className="min-h-screen w-full bg-white-100">
      <Layout>
        <div className="min-h-fit w-full flex flex-col gap-6">
          <div className="bg-white-200 rounded-3xl min-h-[17rem] w-full flex flex-col items-center justify-center p-4 gap-2">
            <h1 className="xl:text-[5rem] text-5xl font-[400] text-dark-100 w-full text-center">
              The work I do
            </h1>
            <p className="xl:text-xl text-lg font-[300] text-dark-100 xl:w-1/2 w-full text-center">
              I create websites that focus on the user&apos;s needs and fit the
              product strategy
            </p>
          </div>
          <div className="min-h-fit w-full xl:flex flex-col gap-4 hidden">
            <div className="flex gap-5">
              <ProjectCardPc
                title={"Unify."}
                description={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum numquam ab suscipit dolore et. Corrupti et nostrum eos impedit sequi!"
                }
                Url={"/images/unify.png"}
                webType={"Community Sharing"}
                date={"2023"}
              />
              <ProjectCardPc
                title={"Neon City"}
                description={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum numquam ab suscipit dolore et. Corrupti et nostrum eos impedit sequi!"
                }
                Url={"/images/neoncity.png"}
                webType={"Mini-Game"}
                date={"2023"}
              />
            </div>
            <div className="flex gap-5">
              {" "}
              <ProjectCardPc
                title={"Alibaba Lite"}
                description={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum numquam ab suscipit dolore et. Corrupti et nostrum eos impedit sequi!"
                }
                Url={"/images/alibabalite.png"}
                webType={"E-Commerce"}
                date={"2023"}
              />
              <ProjectCardPc
                title={"Reelio"}
                description={
                  "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum numquam ab suscipit dolore et. Corrupti et nostrum eos impedit sequi!"
                }
                Url={"/images/reelio.png"}
                webType={"Movie Platform"}
                date={"2023"}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 xl:hidden">
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
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default ProjectPage
