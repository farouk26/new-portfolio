import React from "react"
import { Poppins } from "next/font/google"
import Navbar from "../Navbar"
import Footer from "../Footer"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "700", "900"],
  fallback: ["Poppins", "sans-serif"],
  preload: true,
})

function Layout({ children }) {
  return (
    <main
      className={`${poppins.className} font-poppins 4xl:px-[39rem] 3xl:px-[25rem] 2xl:px-[23rem] xl:px-[11rem] lg:px-[2rem] md:px-5 px-4 lg:py-0 py-4 flex flex-col gap-5`}
    >
      <Navbar />
      <div className="min-h-fit w-full">{children}</div>
      <Footer />
    </main>
  )
}

export default Layout
