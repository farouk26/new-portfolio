import MobileProjectCard from "@/components/Cards/MobileProjectCard"
import Carousel from "@/components/Carousel"
import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Navbar from "@/components/Navbar"
import Socials from "@/components/Socials"

export default function Home() {
  return (
    <main className="min-h-screen bg-white-100">
      <Layout>
        <div className="flex flex-col gap-4 min-h-fit">
          <Navbar />
          <Header />
          <Socials />
          <div className="min-h-fit w-full flex flex-col gap-2 items-center p-4 lg:my-4 2xl:my-6 my-2">
            <h2 className="lg:text-5xl xl:text-6xl 2xl:text-7xl text-4xl font-semibold text-black">
              Selected Works
            </h2>
            <p className="lg:text-xl 2xl:text-2xl text-md text-black font-semibold">
              The Work I&apos;m Proud of
            </p>
          </div>
          <div className="xl:block hidden">
            <Carousel />
          </div>
          <div className="xl:hidden flex flex-col gap-4">
            <MobileProjectCard
              title={"Unify."}
              description={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officiis nesciunt qui error corporis temporibus nemo? In."
              }
              date={"2023"}
              websiteType={"Community Sharing"}
              Url={"/images/project2.png"}
            />
            <MobileProjectCard
              title={"Neon City"}
              description={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officiis nesciunt qui error corporis temporibus nemo? In."
              }
              date={"2023"}
              websiteType={"Mini-Game"}
              Url={"/images/project1.png"}
            />
            <MobileProjectCard
              title={"Reelio"}
              description={
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus officiis nesciunt qui error corporis temporibus nemo? In."
              }
              date={"2023"}
              websiteType={"Movie Platform"}
              Url={"/images/neon.png"}
            />
          </div>
          <div className="bg-red-300 h-[40rem] w-full"></div>
        </div>
      </Layout>
    </main>
  )
}
