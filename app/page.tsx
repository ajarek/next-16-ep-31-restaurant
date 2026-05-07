import Hero from "@/components/Hero"
import DiningOptions from "@/components/DiningOptions"
import OurMenu from "@/components/OurMenu"
import AboutUs from "@/components/AboutUs"
import Events from "@/components/Events"

export default function Home() {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-center gap-24 px-8 sm:px-16 lg:px-24'>
      <Hero />
      <DiningOptions />
      <OurMenu />
      <AboutUs />
      <Events />
    </div>
  )
}
