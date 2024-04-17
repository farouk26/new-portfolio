import React from "react"
import SocialCard from "../Cards/SocialCard"
import { CiLinkedin } from "react-icons/ci"
import { SiGithub } from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"
import { FaDiscord } from "react-icons/fa"

function Socials() {
  return (
    <section className="grid lg:grid-cols-4 grid-cols-2 gap-4">
      <SocialCard icon={<CiLinkedin />} title={"Linkedin"} />
      <SocialCard icon={<SiGithub />} title={"GitHub"} />
      <SocialCard icon={<FaXTwitter />} title={"Twitter"} />
      <SocialCard icon={<FaDiscord />} title={"Discord"} />
    </section>
  )
}

export default Socials
