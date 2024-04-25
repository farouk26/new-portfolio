import React from "react"
import { Poppins } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "700", "900"],
  fallback: ["Poppins", "sans-serif"],
  preload: true,
})

function Layout({ children }) {
  return (
    <div
      className={`${poppins.className} font-poppins 4xl:px-[39rem] 3xl:px-[25rem] 2xl:px-[23rem] xl:px-[11rem] lg:px-[2rem] md:px-5 px-4 lg:py-0 py-4`}
    >
      {children}
    </div>
  )
}

export default Layout
