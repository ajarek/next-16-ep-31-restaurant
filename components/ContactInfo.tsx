import Image from "next/image"

const ContactInfo = () => {
  return (
    <div className='relative w-full flex flex-col items-center justify-center my-8 gap-4'>
      <div className='static md:absolute top-20 left-10 w-120 p-4 bg-background/80 border-2 shadow-2xl z-10 rounded-2xl h-64 flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-primary text-center mb-8 '>
          Opening Hour
        </h2>
        <div className='flex flex-col items-center justify-center gap-4'>
          <p>Mon to Fri ------------- 10am to 11pm</p>
          <p>Sat to Sun ------------- 08am to 12am</p>
        </div>
      </div>
      <div className='relative w-[300px] h-[350px] md:w-[500px] md:h-[550px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[100px] rounded-tl-[100px] overflow-hidden'>
        <Image
          src='/images-contact/contact-5.avif'
          alt='About-As'
          fill
          className='object-cover rounded-xl'
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="eager"
          priority={true}
        />
      </div>
      <div className='static md:absolute right-10 bottom-20 w-120 p-4 bg-background/80 border-2 shadow-2xl z-10 rounded-2xl h-64 flex flex-col items-center justify-center'>
        <h2 className='text-2xl font-bold text-primary text-center mb-8 '>
          Reach Us
        </h2>
        <div className='flex flex-col items-start justify-center gap-4'>
          <p>📞 Phone: +48 518 559 825</p>
          <p>📧 Email: ajarek@poczta.onet.pl</p>
          <p>
            📍 Address: ul. Europejska 2, 78-100 Kołobrzeg, Polska
          </p>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
