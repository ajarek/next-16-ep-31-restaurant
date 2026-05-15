import Image from "next/image"

const chefs = [
  {
    name: "Julian Moretti",
    role: "Executive Chef",
    image: "/images-about/chef-1.avif",
    imageRadius:
      "rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-md rounded-bl-md",
  },
  {
    name: "Elena Hartmann",
    role: "Pastry Chef",
    image: "/images-about/chef-2.avif",
    imageRadius:
      "rounded-tr-[5rem] rounded-bl-[5rem] rounded-tl-md rounded-br-md",
  },
  {
    name: "Tobias Cruz",
    role: "Sous Chef",
    image: "/images-about/chef-3.avif",
    imageRadius:
      "rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-md rounded-bl-md",
  },
]

const OurChefs = () => {
  return (
    <section className='w-full max-w-6xl mx-auto py-16 flex flex-col items-center gap-12'>
      <div className='text-center space-y-4'>
        <h2 className='text-4xl md:text-5xl font-serif font-bold text-primary'>
          Our Chefs
        </h2>
        <p className='text-lg md:text-xl text-foreground/80 font-medium'>
          Meet Our Culinary Artists
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full place-items-center mt-8'>
        {chefs.map((chef, index) => (
          <div key={index} className='flex flex-col items-center gap-8 group'>
            <div
              className='relative p-2.5 bg-background transition-transform duration-500 group-hover:-translate-y-2 group-hover:scale-105'
              style={{
                borderRadius: "255px 15px 225px 15px/15px 225px 15px 255px",
                border: "3px solid var(--primary)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)",
              }}
            >
              <div
                className={`relative w-[280px] h-[360px] overflow-hidden ${chef.imageRadius} transition-all duration-500 shadow-inner`}
              >
                <Image
                  src={chef.image}
                  alt={chef.name}
                  fill
                  className='object-cover transition-transform duration-700 group-hover:scale-110'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />

                <div className='absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay'></div>
              </div>

              <div className='absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary opacity-60 -translate-x-3 -translate-y-3 transition-transform duration-500 group-hover:-translate-x-4 group-hover:-translate-y-4'></div>
              <div className='absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary opacity-60 translate-x-3 translate-y-3 transition-transform duration-500 group-hover:translate-x-4 group-hover:translate-y-4'></div>
            </div>

            <div className='text-center space-y-2 mt-2'>
              <h3 className='text-2xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300'>
                {chef.name}
              </h3>
              <p className='text-sm font-sans font-semibold text-foreground/70 uppercase tracking-[0.2em]'>
                {chef.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OurChefs
