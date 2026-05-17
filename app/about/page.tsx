import type { Metadata } from "next"
import Gourmet from "@/components/Gourmet"
import HeroAbout from "@/components/HeroAbout"
import OurChefs from "@/components/OurChefs"
import WhyUs from "@/components/WhyUs"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Still Sea — our story, philosophy, and the culinary artists behind every dish. Fine dining crafted with passion in Kołobrzeg, Poland.",
}

const AboutPage = () => {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-start gap-8 px-8 sm:px-16 lg:px-24 pt-32'>
      <HeroAbout />
      <WhyUs />
      <OurChefs />
      <Gourmet />
    </div>
  )
}

export default AboutPage
