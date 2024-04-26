import Image from "next/image"
import React from "react"
import InfoCard from "../Cards/InfoCard"
import { LiaBrainSolid } from "react-icons/lia"
import { LuUsers2 } from "react-icons/lu"
import { TbListDetails } from "react-icons/tb"

function AboutSection() {
  return (
    <section className="min-h-fit w-full flex flex-col gap-4">
      <div className="min-h-fit w-full flex flex-col gap-2 items-center py-4 mb-4">
        <h2 className="lg:text-5xl xl:text-6xl 2xl:text-7xl text-4xl font-[500] text-black">
          About me
        </h2>
        <p className="lg:text-xl 2xl:text-2xl text-md text-black font-[400]">
          A web developer based in Algeria
        </p>
      </div>
      <div className="min-h-fit flex xl:flex-row flex-col xl:gap-4 gap-6 w-full">
        <div className="min-h-fit w-full bg-white-200 rounded-3xl flex flex-col gap-2 p-4 xl:p-6 2xl:justify-center">
          <div className="flex flex-col gap-4 xl:p-4 p-2 w-full">
            <h2 className="3xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-[500] text-black lg:w-[90%] xl:w-[85%]">
              Passionate versatile front-end web developer and pixel perfect
              guy.
            </h2>
            <p className="3xl:text-xl 2xl:text-lg text-md font-[400] text-black">
              I&apos;m a front-end web developer with a unique background in
              phytopathology, specializing in creating user-centric,
              aesthetically pleasing web interfaces. Committed to teamwork and
              lifelong learning, I also maintain an active interest in gaming,
              and tech trends.
            </p>
          </div>
          <div className="w-full flex md:flex-row flex-col items-center gap-4 xl:p-4 p-2">
            <button className="btn 2xl:w-[14rem] xl:w-[13rem] lg:w-[13rem] md:w-1/3 w-full uppercase font-[500] text-white-200 bg-dark-100 rounded-full">
              Download Resume
            </button>
            <button className="btn 2xl:w-[14rem] xl:w-[13rem] lg:w-[13rem] md:w-1/3 w-full btn-outline font-[500] border-dark-100 text-black uppercase rounded-full">
              More About Me
            </button>
          </div>
        </div>
        <figure className="xl:w-[63%] w-full">
          <Image
            alt="avatar-image"
            src="/images/avatar.jpg"
            height={720}
            width={720}
            className="w-full h-full object-cover rounded-3xl shadow-md"
          />
        </figure>
      </div>
      <div className="flex md:flex-row flex-col gap-4 w-full">
        <InfoCard
          title={"Team Player & Fast Learner"}
          description={
            "Excelling in team settings, fostering open communication."
          }
          icon={<LuUsers2 />}
        />
        <InfoCard
          title={"Detail Oriented"}
          description={"Detail-oriented, aligning pixels with precision."}
          icon={<TbListDetails />}
        />
        <InfoCard
          title={"Problem Solver"}
          description={
            "Fresh perspective, passionate about innovative solutions."
          }
          icon={<LiaBrainSolid />}
        />
      </div>
    </section>
  )
}

export default AboutSection
