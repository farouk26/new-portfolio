import React from "react"

function DetailCard({ title, subtitle }) {
  return (
    <div className="min-h-fit w-full bg-white-200 rounded-3xl">
      <div className="flex flex-col gap-8 py-8 px-10 justify-center h-full">
        <p className="text-lg text-dark-100 font-[400] uppercase">{title}</p>
        <h2 className="text-7xl text-dark-100 font-[500]">{subtitle}</h2>
      </div>
    </div>
  )
}

export default DetailCard
