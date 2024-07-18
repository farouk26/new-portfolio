import React from "react"

function StatusCard({ title, IconComponent, IconComponent2, status }) {
  return (
    <div className="w-full min-h-fit bg-white-200 rounded-3xl 4xl:p-6  3xl:p-6 md:p-6 p-4">
      <div className="w-full h-full flex flex-col gap-4 p-2">
        <span className="text-3xl rounded-full w-12 h-12 text-white-200 flex justify-center items-center bg-midnight-teal">
          {IconComponent}
        </span>
        <div className="flex flex-col gap-3 w-full">
          <span className="flex gap-1 items-center">
            <span className="text-green-700 text-2xl">{IconComponent2}</span>
            <p className="text-dark-100 font-[600] xl:text-xl text-lg font-lora">
              {title}
            </p>
          </span>
          <p className="font-[500] xl:text-md text-sm font-poppins text-midnight-teal">
            {status}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatusCard
