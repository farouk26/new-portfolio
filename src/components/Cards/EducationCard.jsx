import React from "react"
import { PiStudent } from "react-icons/pi"

function EducationCard({ occupation, organization, major, period }) {
  return (
    <div className="xl:h-[18rem] 2xl:h-[19rem] 3xl:h-[17rem] min-h-fit w-full bg-white-200 rounded-3xl p-4">
      <div className="flex flex-col w-full h-full gap-4 xl:p-4 p-2">
        <div className="w-full min-h-fit">
          <span className="text-3xl text-white-200 bg-midnight-teal rounded-full xl:w-14 xl:h-14 w-12 h-12 flex justify-center items-center">
            <PiStudent />
          </span>
        </div>
        <div className="flex flex-col xl:justify-between w-full h-full gap-4">
          <div className="w-full min-h-fit flex flex-col gap-1">
            <h2 className="xl:text-3xl text-2xl font-[600] text-dark-100 font-lora">
              {occupation}
            </h2>
            <p className="xl:text-lg text-md font-[500] text-midnight-green font-lora">
              {major}
            </p>
            <p className="xl:text-md text-sm font-[400] text-dark-100 font-poppins">
              {organization}
            </p>
          </div>
          <span className="badge badge-outline xl:badge-lg badge-md border-dark-100 text-dark-100 font-poppins">
            {period}
          </span>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
