import React from "react"
import SkillCard from "../Cards/SkillCard"
import { TbBrandNextjs } from "react-icons/tb"
import { FaReact } from "react-icons/fa"
import { RiJavascriptFill } from "react-icons/ri"
import { SiTailwindcss } from "react-icons/si"

function SkillSection() {
  return (
    <section className="min-h-fit w-full">
      <div className="min-h-fit w-full flex flex-col gap-6">
        <div className="min-h-fit w-full flex flex-col gap-2 items-center p-4 lg:my-2 2xl:my-4 my-2">
          <h2 className="lg:text-5xl xl:text-6xl 2xl:text-7xl text-4xl font-[500] text-black">
            Top Skills
          </h2>
          <p className="lg:text-xl 2xl:text-2xl text-md text-black font-[400]">
            The best of me to bring your product stand-out
          </p>
        </div>
        <div className="flex xl:flex-row flex-col gap-6 w-full ">
          <div className="flex-1 w-full">
            <SkillCard
              title={"JavaScript"}
              description={
                "An essential web scripting language for interactive, dynamic development in modern web applications."
              }
              icon={<RiJavascriptFill className="text-yellow-400" />}
            />
          </div>
          <div className="xl:w-[42%] w-full">
            <SkillCard
              title={"NextJS"}
              description={
                "A Framework for React.js, simplifying server-side rendering and providing efficient, scalable web applications."
              }
              icon={<TbBrandNextjs />}
            />
          </div>
        </div>
        <div className="flex xl:flex-row flex-col gap-5 w-full ">
          <div className="xl:w-[42%] w-full">
            <SkillCard
              title={"ReactJS"}
              description={
                "A JavaScript library for building user interfaces, facilitating component-based, fast, and interactive web development."
              }
              icon={<FaReact className="text-blue-400" />}
            />
          </div>
          <div className="flex-1 w-full">
            <SkillCard
              title={"TailwindCSS"}
              description={
                "A Utility-first CSS framework for building custom, responsive designs with ease and speed."
              }
              icon={<SiTailwindcss className="text-cyan-600" />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillSection
