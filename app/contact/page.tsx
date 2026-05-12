
import ContactInfo from '@/components/ContactInfo'
import ContactUs from '@/components/ContactUs'
import Gourmet from '@/components/Gourmet'
import HeroContact from '@/components/HeroContact'
import MapContact from '@/components/MapContact'

const ContactPage = () => {
  return (
    <div className='min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-start gap-8 px-8 sm:px-16 lg:px-24 pt-32'>
        <HeroContact />
        <ContactUs />
        <ContactInfo />
        <MapContact />
        <Gourmet />
    </div>
  )
}

export default ContactPage