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
        <div className="min-h-fit w-full flex flex-col gap-5">
          {/* Header */}
          <div className="min-h-fit w-full flex xl:flex-row flex-col gap-4">
            {/* First Column */}
            <div className="xl:w-[60%] w-full bg-white-200 rounded-3xl flex flex-col">
              <div className="flex flex-col gap-2 w-full min-h-fit">
                <p className="text-dark-100 font-[400] text-2xl">About me</p>
                <h1 className="text-dark-100 text-7xl font-[500]">
                  Creative Front-End Web Developer
                </h1>
              </div>
              <div className="w-full flex gap-2">
                <button className="btn btn-lg bg-dark-200 text-white-200 font-[300] uppercase">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default AboutPage
