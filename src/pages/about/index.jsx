import Layout from "@/components/Layout"
import React from "react"

function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-white-100">
      <Layout>
        <div className="xl:h-[33rem] min-h-fit w-full flex xl:flex-row flex-col gap-4">
          {/* First Column */}
          <div className="bg-white-200 rounded-3xl h-full xl:w-[51%] w-full flex flex-col xl:p-10 p-6 gap-6 xl:justify-between">
            <div className="flex flex-col gap-4 w-full min-h-fit">
              <p className="xl:text-2xl text-xl text-dark-100 font-[400]">
                About me
              </p>
              <h1 className="xl:text-7xl text-5xl text-dark-100 font-[500]">
                Creative Front-End Developer
              </h1>
            </div>
            <div className="flex xl:flex-row flex-col gap-3 w-full justify-center items-center">
              <button className="btn xl:btn-lg btn-md bg-dark-200 text-white-200 uppercase xl:w-[49%] w-full rounded-full font-[400]">
                Get In Touch
              </button>
              <button className="btn xl:btn-lg btn-md border-dark-100 btn-ghost text-dark-100 rounded-full uppercase xl:w-[49%] w-full font-[400]">
                Download My CV
              </button>
            </div>
          </div>
          {/* Second Column */}
          <div className="flex flex-col gap-4 h-full xl:w-[49%] w-full">
            <div className="xl:h-[60%] min-h-fit w-full bg-white-200 rounded-3xl flex justify-center items-center p-6">
              <p className="xl:text-xl text-lg font-[400] text-dark-100">
                I&apos;m a dedicated Front-End Developer with experience in
                collaborative team projects and a strong background in creating
                responsive and visually appealing web interfaces. Skilled in
                HTML/CSS, JavaScript, Tailwind CSS, React, Next.js and Firebase.
                I actively participated in four distinct projects, collaborating
                with different teams and showcasing my versatility as a
                developer.
              </p>
            </div>
            <div className="xl:h-[40%] min-h-fit w-full bg-white-200 rounded-3xl flex justify-center items-center p-6">
              <p className="xl:text-xl text-lg font-[400] text-dark-100">
                For each project. I strive to create elegant and meaningful
                solutions for the end user. I can work independently on projects
                as well as collaboratively within a team if reauired. I ensure
                seamless execution and optimal results.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default AboutPage
