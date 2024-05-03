import AboutSection from "@/components/AboutSection"
import LoopCarousel from "@/components/Carousel/LoopCarousel"
import TestimonialCarousel from "@/components/Carousel/Testimonials/TestimonialCarousel"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import ProjectSection from "@/components/ProjectSection"
import SkillSection from "@/components/SkillsSection"
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
          <SkillSection />
          <LoopCarousel />
          <TestimonialCarousel />
        </div>
      </Layout>
    </main>
  )
}
