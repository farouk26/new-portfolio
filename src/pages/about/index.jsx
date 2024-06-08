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
          <div className="xl:h-[33rem] h-full w-full flex xl:flex-row flex-col gap-4">
            {/* First Column */}
            <div className="xl:w-[52%] h-full w-full bg-white-200 rounded-3xl flex flex-col gap-8 p-9 justify-between">
              <div className="flex flex-col gap-4 w-full min-h-fit">
                <p className="text-dark-100 font-[500] text-3xl">About me</p>
                <h1 className="text-dark-100 xl:text-7xl text-6xl font-[500]">
                  Creative Frontend Web Developer
                </h1>
              </div>
              <div className="w-full flex gap-3 xl:flex-row flex-col justify-center">
                <button className="btn btn-lg bg-dark-200 xl:w-[49%] w-full text-white-200 font-[300] uppercase rounded-full">
                  Get In Touch
                </button>
                <button className="btn btn-lg btn-ghost border-dark-100 text-dark-100 xl:w-[49%] w-full hover:text-dark-100 hover:border-dark-100 font-[300] uppercase rounded-full">
                  Download My CV
                </button>
              </div>
            </div>
            {/* Second Column */}
            <div className="h-full xl:w-[48%] w-full flex flex-col gap-4">
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
          <span className="w-full min-h-fit">
            <h1 className="font-[500] text-6xl text-dark-100 p-2 text-center my-4">
              Summary
            </h1>
          </span>

          {/* Second Section */}
          <div className="min-h-fit w-full">
            <div className="flex xl:flex-row flex-col-reverse gap-4 w-full h-full">
              {/* First Column */}
              <div className="flex flex-col h-full xl:w-[35%] w-full gap-4">
                <DetailCard title={"Years Of Experience"} numbers={"1+"} />
                <DetailCard title={"Projects Completed"} numbers={"4+"} />
                <DetailCard title={"Skills Learned"} numbers={"12+"} />
              </div>
              {/* Second Column */}
              <div className="xl:w-[65%] w-full min-h-fit flex flex-col gap-4">
                <div className="flex xl:flex-row flex-col-reverse gap-4 w-full h-full">
                  {/* First Column */}
                  <div className="h-full xl:w-[50%] w-full flex xl:flex-col flex-col gap-4">
                    <div className="w-full h-[35%]">
                      <StatusCard
                        IconComponent={<TbBriefcase />}
                        IconComponent2={<GoDotFill />}
                        title={"Available for Work"}
                        status={"Status"}
                      />
                    </div>
                    <span className="w-full xl:h-full flex flex-col gap-4 p-8 bg-white-200 rounded-3xl">
                      <p className="text-dark-100 font-[400] text-xl">
                        This is one of my favorite quotes by Confucius.
                      </p>
                      <q className="text-dark-100 font-[500] text-4xl">
                        The man who moves a mountain begins by carrying away
                        small stones.
                      </q>
                    </span>
                  </div>
                  {/* Second Column */}
                  <div className="h-full xl:w-[50%] w-full flex flex-col gap-4">
                    <figure className="w-full h-full">
                      <Image
                        alt="personal-picture"
                        src={"/images/farouk.png"}
                        height={500}
                        width={500}
                        className="rounded-3xl w-full h-full object-cover"
                      />
                    </figure>
                    <div className="w-full h-[35%]">
                      <StatusCard
                        IconComponent={<CiRainbow />}
                        title={"Remote & Freelance"}
                        status={"Prefered work type"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="w-full min-h-fit text-center">
            <h1 className="text-6xl font-[500] text-dark-100 p-2 my-4">
              Education
            </h1>
          </span>
          <div className="min-h-fit w-full">
            <div className="w-full h-full flex flex-col gap-4">
              <div className="w-full min-h-fit">
                <EducationCard
                  occupation={"Front-End Web Development"}
                  major={"Software Engineering"}
                  organization={"Re:Coded"}
                  period={"2023 - 2023"}
                />
              </div>
              <div className="w-full min-h-fit flex xl:flex-row flex-col gap-4">
                <EducationCard
                  occupation={"Master of Science (MSc)"}
                  major={"Plant Disease - Agronomy"}
                  organization={"Dr. Yahia Fares University"}
                  period={"2020 - 2022"}
                />
                <EducationCard
                  occupation={"Bachelor of Science (BSc)"}
                  major={"Plant Protection - Agronomy"}
                  organization={"Dr. Yahia Fares University"}
                  period={"2016 - 2020"}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default AboutPage
