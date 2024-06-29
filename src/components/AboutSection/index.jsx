import Image from "next/image"
import React from "react"
import InfoCard from "../Cards/InfoCard"
import { LiaBrainSolid } from "react-icons/lia"
import { LuUsers2 } from "react-icons/lu"
import { TbListDetails } from "react-icons/tb"
import Link from "next/link"
import ColorfulButton from "../Buttons/ColorfulButton"
import TransparentButton from "../Buttons/TransparentButton"

function AboutSection() {
  return (
    <section className="min-h-fit w-full flex flex-col gap-4">
      <div className="min-h-fit w-full flex flex-col gap-2 items-center py-4 mb-2 font-lora">
        <h2 className="lg:text-5xl xl:text-6xl 3xl:text-5xl text-4xl font-[500] text-black">
          About me
        </h2>
        <p className="lg:text-xl xl:text-lg 3xl:text-2xl text-md text-black font-[400] font-poppins">
          A web developer based in Algeria
        </p>
      </div>
      <div className="min-h-fit flex xl:flex-row 2xl:flex-col flex-col xl:gap-4 gap-6 w-full">
        <div className="min-h-fit w-full bg-white-200 rounded-3xl flex flex-col gap-2 p-4 xl:p-8 lg:p-6 2xl:justify-center">
          <div className="flex flex-col gap-4 xl:p-4 p-2 w-full font-lora">
            <h2 className="3xl:text-4xl xl:text-4xl lg:text-3xl md:text-3xl text-2xl xl:font-[500] font-[500] text-black lg:w-[90%] xl:w-[85%]">
              Passionate versatile front-end web developer and pixel perfect
              guy.
            </h2>
            <p className="3xl:text-lg 2xl:text-lg text-md font-[400] text-black font-poppins">
              I&apos;m a front-end web developer with a background in plant
              science, specializing in creating user-friendly, attractive web
              interfaces. I love teamwork and learning new things. When I&apos;m
              not coding, I&apos;m into gaming and keeping up with tech trends.
            </p>
          </div>
          <div className="w-full flex md:flex-row flex-col 2xl:justify-center items-center gap-4 xl:p-4 p-2">
            <Link
              className="md:w-fit w-full flex justify-center"
              href={"/"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <ColorfulButton
                mainText={"Download Resume"}
                secondText={"Click Me"}
                widthClasses={
                  "2xl:w-[21rem] xl:w-[13rem] lg:w-[13rem] md:w-[15rem] w-[90%]"
                }
                btnSize={"xl:btn-md md:btn-md"}
                fontSize={"text-md"}
              />
            </Link>
            <Link
              className="md:w-fit w-full flex justify-center"
              href={"/about"}
              rel="noopener noreferrer"
              target="_blank"
            >
              <TransparentButton
                mainText={"More About Me"}
                secondText={"You Won't Regret It"}
                btnSize={"xl:btn-md md:btn-md"}
                widthClasses={
                  "2xl:w-[21rem] xl:w-[13rem] lg:w-[13rem] md:w-[15rem] w-[90%]"
                }
              />
            </Link>
          </div>
        </div>
        <figure className="xl:w-[63%] 2xl:w-full 3xl:w-[65%] w-full">
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
