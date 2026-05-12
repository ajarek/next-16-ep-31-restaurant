import React from 'react'
import { ContactForm } from './ContactForm'

const ContactUs = () => {
  return (
    <div className=' w-full flex flex-col items-center justify-center gap-8 mt-4 '>
      <div className='relative w-full h-[700px] bg-[url("/images-contact/contact-4.avif")] bg-cover bg-center '>
        <div className='w-3/4 md:w-1/2 absolute top-10 bottom-10 right-1/2 transform translate-x-1/2 bg-primary/90 flex flex-col items-center justify-start  rounded-2xl'>
          
          <ContactForm />
        </div>
      </div>
    </div>
  )
}

export default ContactUs