import React from "react"

function DetailCard({ title, subtitle }) {
  return (
    <div className="w-full h-[12.75rem] bg-white-200 rounded-3xl p-6">
      <div className="flex flex-col gap-6 p-4">
        <p className="font-[400] uppercase text-dark-100">
          Years Of Experience
        </p>
        <h1 className="font-[500] text-dark-100 uppercase text-6xl">1+</h1>
      </div>
    </div>
  )
}

export default DetailCard
