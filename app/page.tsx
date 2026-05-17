import type { Metadata } from "next"
import DiningOptions from "@/components/DiningOptions"
import OurMenu from "@/components/OurMenu"
import AboutUs from "@/components/AboutUs"
import Events from "@/components/Events"
import Testimonials from "@/components/Testimonials"
import Gourmet from "@/components/Gourmet"
import Gallery from "@/components/Gallery"
import HeroHome from "@/components/HeroHome"

export const metadata: Metadata = {
  description:
    "Discover Still Sea in Kołobrzeg — where every dish tells a story. Experience exquisite cuisine, elegant ambiance, and unforgettable flavors. Book your table today.",
}

export default function Home() {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-center gap-24 px-8 sm:px-16 lg:px-24'>
      <HeroHome />
      <DiningOptions />
      <OurMenu />
      <AboutUs />
      <Events />
      <Testimonials />
      <Gourmet />
      <Gallery />
    </div>
  )
}
