import ProjectDetailsCard from "@/components/Cards/ProjectDetailsCard"
import Layout from "@/components/Layout"
import React from "react"

function unifyPage() {
  return (
    <section className="w-full min-h-screen bg-white-100">
      <Layout>
        <ProjectDetailsCard />
      </Layout>
    </section>
  )
}

export default unifyPage
