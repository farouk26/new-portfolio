import React from "react"
import Navbar from "../Navbar"
import Footer from "../Footer"

function Layout({ children }) {
  return (
    <main className="4xl:px-[42rem] 3xl:px-[25rem] 2xl:px-[19rem] xl:px-[10rem] lg:px-[2rem] md:px-5 px-4 lg:pb-5 py-4 flex flex-col gap-5">
      <Navbar />
      <div className="min-h-fit w-full">{children}</div>
      <Footer />
    </main>
  )
}

export default Layout
