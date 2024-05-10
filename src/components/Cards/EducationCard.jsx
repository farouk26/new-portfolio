import React from "react"
import { PiStudent } from "react-icons/pi"

function EducationCard({ occupation, organization, major, period }) {
  return (
    <div className="h-[18rem] w-full bg-white-200 rounded-3xl p-4">
      <div className="flex flex-col w-full h-full gap-4 p-4">
        <div className="w-full min-h-fit">
          <span className="text-3xl text-white-200 bg-dark-100 rounded-full w-14 h-14 flex justify-center items-center">
            <PiStudent />
          </span>
        </div>
        <div className="flex flex-col justify-between w-full h-full">
          <div className="w-full min-h-fit flex flex-col gap-1">
            <h2 className="text-3xl font-[500] text-dark-100">{occupation}</h2>
            <p className="text-lg font-[500] text-dark-100">{major}</p>
            <p className="text-lg font-[400] text-dark-100">{organization}</p>
          </div>
          <span className="badge badge-outline badge-lg border-dark-100 text-dark-100">
            {period}
          </span>
        </div>
      </div>
    </div>
  )
}

export default EducationCard
