import React from "react"
import { TbBriefcase } from "react-icons/tb"
import { GoDotFill } from "react-icons/go"

function StatusCard() {
  return (
    <div className="w-full min-h-fit bg-white-200 rounded-3xl p-4">
      <div className="w-full h-full flex flex-col gap-4 p-4">
        <span className="text-3xl rounded-full w-14 h-14 bg-dark-100 text-white-200 flex justify-center items-center">
          <TbBriefcase />
        </span>
        <div className="flex flex-col gap-3 w-full">
          <span className="text-dark-100 font-[500] text-2xl flex gap-1 items-center">
            <div>
              <GoDotFill />
            </div>
            Available For Work
          </span>
          <p className="text-dark-200 font-[400] text-lg">Status</p>
        </div>
      </div>
    </div>
  )
}

export default StatusCard
