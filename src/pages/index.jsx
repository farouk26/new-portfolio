import Header from "@/components/Header"
import Navbar from "@/components/Navbar"
import Socials from "@/components/Socials"

export default function Home() {
  return (
    <main className="min-h-screen bg-white-100 flex flex-col gap-4 px-4 lg:px-48">
      <Navbar />
      <Header />
      <Socials />
    </main>
  )
}
