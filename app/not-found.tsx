import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className='flex flex-col items-center justify-center h-screen gap-6 bg-background px-4'>
      <div className='flex flex-col items-center gap-2 text-center'>
        <div className='relative text-2xl group-hover:scale-110 transition-transform duration-300'>
          <Image
            src='/images-home/logo.webp'
            alt='Vercel Logo'
            width={220}
            height={220}
            className='object-contain rounded-full'
            loading="eager"
          />
          <div className='absolute inset-0 bg-red-500/50 w-full h-full rounded-full'></div>
        </div>
        <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
          Oops! Page not found
        </h2>
        <p className='max-w-125 text-muted-foreground mt-2'>
          It looks like we&apos;ve lost our way. The page you&apos;re looking
          for may have been deleted, moved, or is temporarily unavailable.
        </p>
      </div>
      <Link href='/' className='mt-4'>
        <Button
          size='lg'
          className='rounded-full px-8 h-12 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 text-xl cursor-pointer'
        >
          Go back to the homepage
        </Button>
      </Link>
    </main>
  )
}
