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
        <div className="min-h-fit w-full bg-white-200 rounded-3xl flex flex-col gap-4 p-4 xl:p-6">
          <div className="flex flex-col gap-6 xl:p-4 p-2 w-full">
            <h2 className="2xl:text-5xl xl:text-4xl lg:text-3xl text-2xl font-[500] text-black lg:w-[90%] xl:w-[80%]">
              Passionate versatile front-end web developer and pixel perfect guy
            </h2>
            <p className="2xl:text-2xl xl:text-lg text-md font-[400] text-black">
              A front-end web developer with a unique background in
              phytopathology, specializing in creating user-centric,
              aesthetically pleasing web interfaces. Committed to teamwork and
              lifelong learning, I also maintain an active interest in gaming,
              fitness, and tech trends.
            </p>
          </div>
          <div className="w-full flex md:flex-row flex-col items-center gap-4 xl:p-4 p-2">
            <button className="btn 2xl:w-[17rem] xl:w-[15rem] lg:w-[13rem] md:w-1/3 w-full uppercase font-[500] text-white-200 bg-dark-100 rounded-full">
              Download Resume
            </button>
            <button className="btn 2xl:w-[17rem] xl:w-[15rem] lg:w-[13rem] md:w-1/3 w-full btn-outline font-[500] border-dark-100 text-black uppercase rounded-full">
              More About Me
            </button>
          </div>
        </div>
        <figure className="xl:w-[60%] w-full">
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
            "I thrive in team environments, fostering open communication and working seamlessly with designers and fellow developers."
          }
          icon={<LuUsers2 />}
        />
        <InfoCard
          title={"Detail Oriented"}
          description={
            "I pride myself on my meticulous attention to detail, ensuring that every pixel aligns seamlessly with the overall design."
          }
          icon={<TbListDetails />}
        />
        <InfoCard
          title={"Problem Solver"}
          description={
            "I bring a fresh perspective and a passion for innovative solutions to the table."
          }
          icon={<LiaBrainSolid />}
        />
      </div>
    </section>
  )
}

export default AboutSection
