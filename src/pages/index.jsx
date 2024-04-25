import AboutSection from "@/components/AboutSection"
import MobileProjectCard from "@/components/Cards/MobileProjectCard"
import Carousel from "@/components/Carousel"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import ProjectSection from "@/components/ProjectSection"
import Socials from "@/components/Socials"

export default function Home() {
  return (
    <main className="min-h-screen bg-white-100">
      <Layout>
        <div className="flex flex-col gap-4 min-h-fit">
          <Navbar />
          <Header />
          <Socials />
          <ProjectSection />
          <AboutSection />
        </div>
      </Layout>
    </main>
  )
}
