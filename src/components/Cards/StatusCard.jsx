import React from "react"
import { motion } from "framer-motion"

function StatusCard({ title, IconComponent, IconComponent2, status }) {
  return (
    <div className="w-full min-h-fit bg-white-200 rounded-3xl 4xl:p-6 3xl:p-6 md:p-6 p-4">
      <div className="w-full h-full flex flex-col gap-4 p-2">
        <span className="text-3xl rounded-full w-12 h-12 text-white-200 flex justify-center items-center bg-midnight-teal">
          {IconComponent}
        </span>
        <div className="flex flex-col gap-2 w-full">
          <span className="flex gap-1 items-center">
            <motion.div
              className="text-green-800 text-xl border-opacity-5 rounded-full"
              initial={{
                scale: 1,
                boxShadow: "0 0 0 0 #004953",
              }}
              animate={{
                scale: [1, 1.2, 1],
                boxShadow: [
                  "0 0 0 0 #004953",
                  "0 0 0 10px rgba(51, 217, 178, 0)",
                  "0 0 0 0 rgba(51, 217, 178, 0)",
                ],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                times: [0, 0.5, 1],
                repeat: Infinity,
              }}
            >
              {IconComponent2}
            </motion.div>{" "}
            <p className="text-dark-100 font-[600] xl:text-xl text-lg font-lora">
              {title}
            </p>
          </span>
          <p className="font-[500] xl:text-md text-sm font-poppins text-midnight-green">
            {status}
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatusCard
