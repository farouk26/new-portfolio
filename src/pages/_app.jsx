import "@/styles/globals.css"
import "@/styles/loop.css"
import "@/styles/button.css"
import "@/styles/hovers.css"
import { Poppins, Lora } from "next/font/google"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "700", "900"],
  fallback: ["Poppins", "sans-serif"],
  preload: true,
})
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  fallback: ["Lora", "serif"],
  preload: true,
})

export default function App({ Component, pageProps }) {
  return (
    <div className={`${poppins.variable} ${lora.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
