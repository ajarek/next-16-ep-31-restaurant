import type { Metadata } from "next"
import ContactInfo from "@/components/ContactInfo"
import ContactUs from "@/components/ContactUs"
import Gourmet from "@/components/Gourmet"
import HeroContact from "@/components/HeroContact"
import MapContact from "@/components/MapContact"
import FAQ from "@/components/FAQ"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Still Sea in Kołobrzeg. Book a table, inquire about private events, or find answers to frequently asked questions. We look forward to hearing from you.",
}

const ContactPage = () => {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-start gap-8 px-8 sm:px-16 lg:px-24 pt-32'>
      <HeroContact />
      <ContactUs />
      <ContactInfo />
      <MapContact />
      <FAQ />
      <Gourmet />
    </div>
  )
}

export default ContactPage
