import MobileProjectCard from "@/components/Cards/MobileProjectCard"
import ProjectCardPc from "@/components/Cards/ProjectCardPc"
import Layout from "@/components/Layout"
import React from "react"

function ProjectPage() {
  return (
    <section className="min-h-screen w-full bg-white-100">
      <Layout>
        <div className="min-h-fit w-full flex flex-col gap-6">
          <div className="bg-white-200 rounded-3xl min-h-[17rem] w-full flex flex-col items-center justify-center p-4 xl:gap-8 gap-4">
            <h1 className="xl:text-[5.4rem] md:text-5xl text-4xl font-[600] text-dark-100 w-full text-center font-lora">
              The work I do
            </h1>
            <p className="xl:text-xl text-md font-[400] text-dark-100 xl:w-1/2 w-full text-center font-poppins">
              I create websites that focus on the user&apos;s needs and fit the
              product strategy
            </p>
          </div>
          {/* Project Cards Section */}
          <div className="min-h-fit w-full xl:flex flex-col gap-4 hidden">
            <div className="flex gap-5">
              <ProjectCardPc
                title={"Unify."}
                description={
                  "An online platform fostering community by promoting the sharing and reuse of various items among members."
                }
                Url={"/images/unify.png"}
                webType={"Community Sharing"}
                date={"2023"}
              />
              <ProjectCardPc
                title={"Neon City"}
                description={
                  "An interactive mini-game, allowing users to personalize pre-generated stories by filling in the blanks."
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
                  "An e-commerce website delivering seamless browsing and purchasing experiences for a diverse array of products."
                }
                Url={"/images/alibabalite.png"}
                webType={"E-Commerce"}
                date={"2023"}
              />
              <ProjectCardPc
                title={"Reelio"}
                description={
                  "An innovative movie platform delivering seamless exploration of films and series for passionate enthusiasts."
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
              title={"Alibaba Lite"}
              description={
                "An e-commerce website delivering seamless browsing and purchasing experiences for a diverse array of products."
              }
              date={"2023"}
              websiteType={"E-commerce"}
              Url={"/images/alibabalite.png"}
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
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default ProjectPage
