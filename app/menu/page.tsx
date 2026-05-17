import type { Metadata } from "next"
import DinnerMenu from "@/components/DinnerMenu"
import HeroMenu from "@/components/HeroMenu"

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore the Still Sea menu — a symphony of flavors featuring handcrafted appetizers, main courses, desserts, and drinks. Fine dining at its best in Kołobrzeg, Poland.",
}

const MenuPage = () => {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-start gap-8 px-8 sm:px-16 lg:px-24 pt-32'>
      <HeroMenu />
      <DinnerMenu />
    </div>
  )
}

export default MenuPage
