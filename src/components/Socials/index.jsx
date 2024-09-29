import React from "react"
import SocialCard from "../Cards/SocialCard"
import { PiLinkedinLogo } from "react-icons/pi"
import { SiGithub } from "react-icons/si"
import { FaXTwitter } from "react-icons/fa6"
import { FaDiscord } from "react-icons/fa"
import { BsArrowRight } from "react-icons/bs"
function Socials() {
  return (
    <section className="grid lg:grid-cols-4 grid-cols-2 gap-4 w-full min-h-fit">
      <SocialCard
        icon={<PiLinkedinLogo />}
        title={"LinkedIn"}
        icon_2={<BsArrowRight />}
        title_2={"Visit Link"}
      />
      <SocialCard
        icon={<SiGithub />}
        title={"GitHub"}
        title_2={"Visit Link"}
        icon_2={<BsArrowRight />}
      />
      <SocialCard
        icon={<FaXTwitter />}
        title_2={"Visit Link"}
        title={"Twitter"}
        icon_2={<BsArrowRight />}
      />
      <SocialCard
        title_2={"Copy"}
        icon={<FaDiscord />}
        title={"Discord"}
        icon_2={<BsArrowRight />}
      />
    </section>
  )
}

export default Socials
