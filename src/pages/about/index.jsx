import DetailCard from "@/components/Cards/DetailCard"
import EducationCard from "@/components/Cards/EducationCard"
import StatusCard from "@/components/Cards/StatusCard"
import Layout from "@/components/Layout"
import Image from "next/image"
import React from "react"
import { GoDotFill } from "react-icons/go"
import { TbBriefcase } from "react-icons/tb"
import { CiRainbow } from "react-icons/ci"

function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-white-100">
      <Layout>
        <div className="min-h-full w-full flex flex-col gap-5">
          {/* Header Section */}
          <div className="h-[33rem] w-full flex xl:flex-row flex-col gap-4">
            {/* First Column */}
            <div className="xl:w-[52%] h-full w-full bg-white-200 rounded-3xl flex flex-col p-9 justify-between">
              <div className="flex flex-col gap-4 w-full min-h-fit">
                <p className="text-dark-100 font-[500] text-3xl">About me</p>
                <h1 className="text-dark-100 text-7xl font-[500]">
                  Creative Frontend Web Developer
                </h1>
              </div>
              <div className="w-full flex gap-3 justify-center">
                <button className="btn btn-lg bg-dark-200 w-[49%] text-white-200 font-[300] uppercase rounded-full">
                  Get In Touch
                </button>
                <button className="btn btn-lg btn-ghost border-dark-100 text-dark-100 w-[49%] hover:text-dark-100 hover:border-dark-100 font-[300] uppercase rounded-full">
                  Download My CV
                </button>
              </div>
            </div>
            {/* Second Column */}
            <div className="h-full w-[48%] flex flex-col gap-4">
              <div className="h-[60%] w-full bg-white-200 rounded-3xl p-8 flex items-center">
                <p className="text-dark-100 font-[300] xl:text-lg 3xl:text-xl">
                  I&apos;m a dedicated Front-End Developer with experience in
                  collaborative team projects and a strong background in
                  creating responsive and visually appealing web interfaces.
                  Skilled in HTML/CSS, JavaScript, Tailwind CSS, React, Next.js
                  and Firebase. I actively participated in four distinct
                  projects, collaborating with different teams and showcasing my
                  versatility as a developer.
                </p>
              </div>
              <div className="h-[40%] w-full bg-white-200 rounded-3xl p-8 flex items-center">
                <p className="text-dark-100 font-[300] xl:text-lg 3xl:text-xl">
                  For each project. I strive to create elegant and meaningful
                  solutions for the end user. I can work independently on
                  projects as well as collaboratively within a team if reauired.
                  I ensure seamless execution and optimal results.
                </p>
              </div>
            </div>
          </div>
          {/* Second Section */}
          <div className="min-h-fit w-full flex flex-row gap-4">
            <div className="flex flex-col h-full w-[42%] gap-4">
              <DetailCard />
              <DetailCard />
              <DetailCard />
            </div>
            <div className="w-[58%] h-1/2">
              <figure>
                <Image
                  alt="personal-picture"
                  src="/images/farouk.png"
                  width={500}
                  height={500}
                  className="w-full h-1/2 object-cover rounded-3xl"
                />
              </figure>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default AboutPage
