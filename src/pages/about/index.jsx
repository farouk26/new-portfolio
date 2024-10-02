import DetailCard from "@/components/Cards/DetailCard"
import EducationCard from "@/components/Cards/EducationCard"
import StatusCard from "@/components/Cards/StatusCard"
import Layout from "@/components/Layout"
import Image from "next/image"
import React from "react"
import { GoDotFill } from "react-icons/go"
import { TbBriefcase } from "react-icons/tb"
import { CiRainbow } from "react-icons/ci"
import ColorfulButton from "@/components/Buttons/ColorfulButton"
import TransparentButton from "@/components/Buttons/TransparentButton"
import Link from "next/link"
import Head from "next/head"

function AboutPage() {
  return (
    <section className="min-h-screen w-full bg-white-100">
      <Head>
        <title>About</title>
      </Head>
      <Layout>
        <div className="min-h-full w-full flex flex-col gap-5">
          {/* Header Section */}
          <div className="xl:h-[100%] min-h-fit w-full flex lg:flex-row 2xl:flex-col 3xl:flex-row flex-col gap-4">
            {/* First Column of Header */}
            <div className="xl:w-[55%] 2xl:w-full w-full min-h-full">
              <div className="w-full min-h-full bg-white-200 rounded-3xl flex flex-col justify-between gap-6 p-6 xl:p-8">
                <div className="min-h-fit w-full flex flex-col p-2 lg:gap-8 gap-4">
                  <p className="md:text-2xl text-lg text-dark-100 font-poppins">
                    About Me
                  </p>
                  <h1 className="text-dark-100 lg:text-7xl xl:text-7xl md:text-6xl text-5xl font-lora font-[600]">
                    I&apos;m versatile front-end developer.
                  </h1>
                </div>
                <div className="flex gap-4 md:flex-row flex-col items-center md:justify-start justify-center w-full min-h-fit">
                  <Link
                    href={
                      "https://drive.google.com/file/d/1RbqLl72psxlov5ADuBP_Dfxj0b1tkoHC/view?usp=sharing"
                    }
                    rel="noopener noreferrer"
                    target="_blank"
                    className="md:w-fit lg:w-full w-full"
                  >
                    <ColorfulButton
                      mainText={"See My Resume"}
                      secondText={"Download My CV"}
                      widthClasses={"lg:w-full xl:w-full md:w-[13rem] w-full"}
                      btnSize={"md:btn-lg btn-md"}
                    />
                  </Link>
                  <Link
                    href={"/contact"}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="md:w-fit lg:w-full w-full"
                  >
                    <TransparentButton
                      mainText={"Get In Touch"}
                      secondText={"Contact Me"}
                      widthClasses={"lg:w-full xl:w-full md:w-[13rem] w-full"}
                      btnSize={"md:btn-lg btn-md"}
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* Second Column of Header */}
            <div className="xl:w-[45%] 2xl:w-full w-full min-h-full flex flex-col gap-4">
              <div className="w-full h-[100%] rounded-3xl bg-white-200 md:p-6 lg:p-6 xl:p-8 3xl:p-5 p-5">
                <p className="text-dark-100 font-poppins md:text-lg text-md font-[400] p-2">
                  I&apos;m a dedicated front-end developer with experience in
                  collaborative team projects and a strong background in
                  creating responsive and vosially appealing web interfaces.
                  Skilled in HTKL/CSS, JavaScript, Tailwind CSS, Reactjs,
                  Next.js and Firebase. I actively participated in four distinct
                  projects, collaborating with different teams and showcasing my
                  versatility as a developer.
                </p>
              </div>
              <div className="w-full h-[100%] rounded-3xl bg-white-200 md:p-6 lg:p-6 xl:p-8 3xl:p-5 p-5">
                <p className="text-dark-100 font-poppins md:text-lg text-md font-[400] p-2 h-full">
                  For each Porject, I strive to create elegant and meaningful
                  solutions for the end user. I can work independently on
                  projects as well as collaboratively within a team if reauired,
                  I ensure seamless execution and optimal results.
                </p>
              </div>
            </div>
          </div>
          <span className="w-full min-h-fit">
            <h1 className="font-[500] lg:text-5xl xl:text-5xl 3xl:text-5xl md:text-4xl text-3xl text-dark-100 p-2 text-center lg:my-4 my-2 font-lora">
              Summary
            </h1>
          </span>

          {/* Second Section */}
          <div className="min-h-fit w-full">
            <div className="flex xl:flex-row flex-col-reverse gap-4 w-full h-full">
              {/* First Column */}
              <div className="flex flex-col min-h-full xl:w-[35%] w-full gap-4">
                <DetailCard title={"Years Of Experience"} numbers={"1+"} />
                <DetailCard title={"Projects Completed"} numbers={"4+"} />
                <DetailCard title={"Skills Learned"} numbers={"12+"} />
              </div>
              {/* Second Column */}
              <div className="xl:w-[65%] w-full min-h-fit flex flex-col gap-4">
                <div className="flex xl:flex-row flex-col-reverse gap-4 w-full h-[100%]">
                  {/* First Column */}
                  <div className="h-[100%] xl:w-[50%] w-full flex xl:flex-col flex-col gap-4">
                    <div className="w-full h-fit">
                      <StatusCard
                        IconComponent={<TbBriefcase />}
                        IconComponent2={<GoDotFill />}
                        title={"Available For Work"}
                        status={"Status"}
                      />
                    </div>
                    <span className="w-full xl:h-[100%] 3xl:min-h-fit flex flex-col gap-4 xl:p-6 md:p-8 p-6 bg-white-200 rounded-3xl">
                      <p className="text-dark-100 font-[400] text-xl 4xl:text-2xl">
                        This is one of my favorite quotes by{" "}
                        <span className="text-midnight-teal font-poppins font-[500]">
                          Confucius
                        </span>
                        .
                      </p>
                      <q className="text-dark-100 font-[500] xl:text-4xl text-3xl 4xl:text-5xl font-lora h-full">
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
                        status={"Prefered Work Type"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="w-full min-h-fit text-center">
            <h1 className="lg:text-5xl xl:text-5xl 3xl:text-5xl md:text-4xl text-3xl font-[500] text-dark-100 p-2 xl:my-4 my-2 font-lora">
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
