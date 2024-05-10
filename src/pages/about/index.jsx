import DetailCard from "@/components/Cards/DetailCard"
import EducationCard from "@/components/Cards/EducationCard"
import InfoCard from "@/components/Cards/InfoCard"
import Layout from "@/components/Layout"
import Image from "next/image"
import React from "react"

function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-white-100">
      <Layout>
        <div className="min-h-fit w-full flex flex-col gap-5">
          {/* Header Section */}
          <div className="xl:h-[33rem] 2xl:h-[47rem] 3xl:h-[34rem] min-h-fit w-full flex xl:flex-row 2xl:flex-col 3xl:flex-row flex-col gap-4">
            {/* First Column */}
            <div className="bg-white-200 rounded-3xl h-full xl:w-[51%] 2xl:w-full 3xl:w-[52%] w-full flex flex-col xl:p-10 md:p-8 p-6 md:gap-10 gap-6 xl:justify-between">
              <div className="flex flex-col gap-4 w-full min-h-fit">
                <p className="xl:text-2xl text-xl text-dark-100 font-[400]">
                  About me
                </p>
                <h1 className="xl:text-7xl text-5xl text-dark-100 font-[500]">
                  Creative Front-End Developer
                </h1>
              </div>
              <div className="flex xl:flex-row md:flex-row flex-col gap-3 w-full justify-center items-center">
                <button className="btn xl:btn-lg btn-md bg-dark-200 text-white-200 uppercase xl:w-[49%] md:w-[50%] w-full rounded-full font-[400]">
                  Get In Touch
                </button>
                <button className="btn xl:btn-lg btn-md border-dark-100 btn-ghost text-dark-100 rounded-full uppercase xl:w-[49%] md:w-[50%] w-full font-[400]">
                  Download My CV
                </button>
              </div>
            </div>
            {/* Second Column */}
            <div className="flex flex-col gap-4 h-full xl:w-[49%] 2xl:w-full 3xl:w-[48%] w-full">
              <div className="xl:h-[60%] min-h-fit w-full bg-white-200 rounded-3xl flex justify-center items-center p-6">
                <p className="xl:text-xl text- font-[400] text-dark-100">
                  I&apos;m a dedicated Front-End Developer with experience in
                  collaborative team projects and a strong background in
                  creating responsive and visually appealing web interfaces.
                  Skilled in HTML/CSS, JavaScript, Tailwind CSS, React, Next.js
                  and Firebase. I actively participated in four distinct
                  projects, collaborating with different teams and showcasing my
                  versatility as a developer.
                </p>
              </div>
              <div className="xl:h-[40%] min-h-fit w-full bg-white-200 rounded-3xl flex justify-center items-center p-6">
                <p className="xl:text-xl text-lg font-[400] text-dark-100">
                  For each project. I strive to create elegant and meaningful
                  solutions for the end user. I can work independently on
                  projects as well as collaboratively within a team if reauired.
                  I ensure seamless execution and optimal results.
                </p>
              </div>
            </div>
          </div>
          {/* Second Section */}
          <div className="xl:h-[38.8rem] min-h-fit w-full xl:flex-row md:flex-row flex-col-reverse flex gap-4">
            {/* First Column */}
            <div className="h-full xl:w-[45%] w-full">
              <div className="flex flex-col gap-4">
                <DetailCard title={"Years Of Experience"} subtitle={"1+"} />
                <DetailCard title={"Projects Completed"} subtitle={"5+"} />
                <DetailCard title={"Skills Learned"} subtitle={"12+"} />
              </div>
            </div>
            <figure className="xl:w-[55%] w-full">
              <Image
                alt="avatar-img"
                src={"/images/farouk.png"}
                height={1080}
                width={1080}
                className="w-full h-full object-cover rounded-3xl shadow-md"
              />
            </figure>
          </div>
          {/* Education Section */}
          <div className="w-full my-8 flex justify-center">
            <h1 className="text-6xl font-[500] text-dark-100">Education</h1>
          </div>
          <div className="min-h-fit w-full">
            <div className="w-full flex flex-col gap-4">
              <EducationCard
                occupation={"Front-End Web Development"}
                major={"Software Engineering"}
                organization={"Re:Coded"}
                period={"2023 - 2023"}
              />
              <div className="flex xl:flex-row md:flex-row flex-col w-full gap-4">
                <EducationCard
                  occupation={"Master of Science (MSc)"}
                  major={"Plant Disease / Agronomy"}
                  organization={"Dr. Yahia Fares University"}
                  period={"2020 / 2022"}
                />
                <EducationCard
                  occupation={"Bachelor of Science (BSc)"}
                  major={"Plant Protection / Agronomy"}
                  organization={"Dr. Yahia Fares University"}
                  period={"2016 / 2020"}
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
