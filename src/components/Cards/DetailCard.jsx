import React from "react"

function DetailCard({ title, subtitle }) {
  return (
    <div className="h-full w-full bg-white-200 rounded-3xl p-8">
      <div className="flex flex-col gap-8 h-full 3xl:justify-center">
        <p className="text-lg text-dark-100 font-[400] uppercase">
          Years Of Experience
        </p>
        <h2 className="text-7xl text-dark-100 font-[400]">1+</h2>
      </div>
    </div>
  )
}

export default DetailCard
