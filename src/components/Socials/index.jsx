import React from "react"
import SocialCard from "../Cards/SocialCard"
import { CiLinkedin } from "react-icons/ci"
import { SiGithub } from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"
import { FaDiscord } from "react-icons/fa"
import { TfiArrowCircleRight } from "react-icons/tfi"

function Socials() {
  return (
    <section className="grid lg:grid-cols-4 grid-cols-2 gap-4">
      <SocialCard
        icon={<CiLinkedin />}
        title={"Linkedin"}
        icon_2={<TfiArrowCircleRight />}
        title_2={"Visit Link"}
      />
      <SocialCard
        icon={<SiGithub />}
        title={"GitHub"}
        icon_2={<TfiArrowCircleRight />}
      />
      <SocialCard
        icon={<FaXTwitter />}
        title={"Twitter"}
        icon_2={<TfiArrowCircleRight />}
      />
      <SocialCard
        icon={<FaDiscord />}
        title={"Discord"}
        icon_2={<TfiArrowCircleRight />}
      />
    </section>
  )
}

export default Socials
