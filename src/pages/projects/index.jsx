import MobileProjectCard from "@/components/Cards/MobileProjectCard"
import ProjectCard from "@/components/Cards/ProjectCard"
import Layout from "@/components/Layout"
import Head from "next/head"
import React from "react"

function ProjectPage() {
  return (
    <section className="min-h-screen w-full bg-white-100">
      <Head>
        <title>Projects</title>
      </Head>
      <Layout>
        <div className="min-h-fit w-full flex flex-col gap-6">
          <div className="bg-white-200 rounded-3xl xl:min-h-[20rem] md:h-[13rem] lg:h-[16rem] min-h-fit w-full flex flex-col items-center justify-center xl:p-4 py-8 px-4 xl:gap-6 gap-4">
            <h1 className="xl:text-[5.4rem] md:text-5xl lg:text-6xl text-4xl font-[600] text-dark-100 w-full text-center font-lora">
              The Work I do
            </h1>
            <p className="xl:text-xl md:text-lg text-sm font-[400] text-dark-100 xl:w-1/2 md:w-[60%] w-full text-center font-poppins">
              I create websites that focus on the user&apos;s needs and fit the
              product strategy
            </p>
          </div>
          {/* Project Cards Section */}
          <div className="min-h-fit w-full flex flex-col gap-4">
            <div className="w-full min-h-fit flex md:flex-row flex-col gap-4">
              <ProjectCard
                title={"Unify."}
                description={
                  "An online platform fostering community by promoting the sharing and reuse of various items among members."
                }
                Url={"/images/unify.png"}
                webType={"Community Sharing"}
                date={"2023"}
              />
              <ProjectCard
                title={"Neon City"}
                description={
                  "An interactive mini-game, allowing users to personalize pre-generated stories by filling in the blanks."
                }
                Url={"/images/neoncity.png"}
                webType={"Mini-Game"}
                date={"2023"}
              />
            </div>
            <div className="w-full min-h-fit flex md:flex-row flex-col gap-4">
              <ProjectCard
                title={"Alibaba Lite"}
                description={
                  "An e-commerce website delivering seamless browsing and purchasing experiences for a diverse array of products."
                }
                Url={"/images/alibabalite.png"}
                webType={"E-Commerce"}
                date={"2023"}
              />
              <ProjectCard
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
        </div>
      </Layout>
    </section>
  )
}

export default ProjectPage
