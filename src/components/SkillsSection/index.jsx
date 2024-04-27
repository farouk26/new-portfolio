import React from "react"
import SkillCard from "../Cards/SkillCard"
import { TbBrandNextjs } from "react-icons/tb"
import { FaReact } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"
import { SiTailwindcss } from "react-icons/si"

function SkillSection() {
  return (
    <section className="min-h-fit w-full">
      <div className="min-h-fit w-full flex flex-col gap-4">
        <div className="min-h-fit w-full flex flex-col gap-2 items-center p-4 lg:my-2 2xl:my-4 my-2">
          <h2 className="lg:text-5xl xl:text-6xl 2xl:text-7xl text-4xl font-[500] text-black">
            Top Skills
          </h2>
          <p className="lg:text-xl 2xl:text-2xl text-md text-black font-[400]">
            The best of me to bring your product stand-out
          </p>
        </div>
        <div className="flex xl:flex-row flex-col gap-5 w-full ">
          <div className="xl:w-[61%] w-full">
            <SkillCard
              title={"Javascript"}
              description={"A Dynamic scripting for web interactivity."}
              icon={<RiJavascriptFill className="text-yellow-400" />}
            />
          </div>
          <div className="xl:w-[49%] w-full">
            <SkillCard
              title={"NextJS"}
              description={"A React-based framework for web applications."}
              icon={<TbBrandNextjs />}
            />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col gap-5 w-full ">
          <div className="xl:w-[49%] w-full">
            <SkillCard
              title={"ReactJS"}
              description={"A JavaScript library for building interfaces."}
              icon={<FaReact className="text-blue-400" />}
            />
          </div>
          <div className="xl:w-[61%] w-full">
            <SkillCard
              title={"TailwindCSS"}
              description={"A Utility-first CSS framework for flexibility."}
              icon={<SiTailwindcss className="text-cyan-600" />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
