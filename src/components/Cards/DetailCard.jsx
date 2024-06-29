import React from "react"

function DetailCard({ title, numbers }) {
  return (
    <div className="w-full h-full bg-white-200 rounded-3xl p-6">
      <div className="flex flex-col gap-6 p-4 h-full">
        <p className="font-[400] uppercase text-dark-100 font-poppins">
          {title}
        </p>
        <h1 className="font-[600] text-dark-100 uppercase text-6xl font-lora">
          {numbers}
        </h1>
      </div>
    </div>
  )
}

export default DetailCard
