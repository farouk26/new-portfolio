import React from "react"

function Layout({ children }) {
  return (
    <div className="4xl:px-[39rem] 3xl:px-[25rem] 2xl:px-[23rem] xl:px-[13rem] lg:px-[9rem] px-6">
      {children}
    </div>
  )
}

export default Layout
