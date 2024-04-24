import React from "react"

function Layout({ children }) {
  return (
    <div className="4xl:px-[39rem] 3xl:px-[25rem] 2xl:px-[23rem] xl:px-[11rem] lg:px-[9rem] px-4 lg:py-0 py-4">
      {children}
    </div>
  )
}

export default Layout
