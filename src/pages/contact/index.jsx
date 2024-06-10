import Layout from "@/components/Layout"
import React from "react"

function ContactPage() {
  return (
    <section className="min-h-screen w-full bg-white-100">
      <Layout>
        <div className="min-h-fit w-full">
          <div className="w-full xl:h-[32rem] h-full flex xl:flex-row gap-4 flex-col">
            {/* First Column */}
            <div className="h-full xl:w-[52%] w-full bg-white-200 rounded-3xl p-6">
              <div className="flex flex-col w-full h-full justify-between p-4">
                <h1 className="text-dark-100 font-[500] text-7xl">
                  I&apos;m ready to hear your thoughts
                </h1>
                <p className="text-dark-100 font-[400] text-lg">
                  I&apos;m looking forward to connecting with you and exploring
                  how my skills in web development can contribute to your needs,
                  Don&apos;t hesitate to reach out to me for a meeting today.
                </p>
              </div>
            </div>
            {/* Second Column */}
            <div className="xl:w-[48%] w-full h-full bg-white-200 rounded-3xl p-4">
              <div className="w-full h-full flex flex-col gap-4 p-2">
                <div className="w-full min-h-fit flex xl:flex-row flex-col gap-4">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="bg-white-100 rounded-2xl h-[3rem] xl:w-[49%] w-full p-4 placeholder-dark-100 text-dark-100"
                  />
                  <input
                    type="text"
                    placeholder="Enter your Email"
                    className="bg-white-100 rounded-2xl h-[3rem] xl:w-[49%] w-full p-4 placeholder-dark-100 text-dark-100"
                  />
                </div>
                <div className="w-full h-full">
                  <textarea
                    placeholder="Write your message .."
                    className="w-full bg-white-100 rounded-2xl p-4 placeholder-dark-200 text-dark-100 min-h-full resize-none"
                  ></textarea>
                </div>
                <button className="btn btn-md rounded-2xl bg-dark-200 text-white-200 uppercase hover:bg-white-200 hover:text-dark-200">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </section>
  )
}

export default ContactPage
