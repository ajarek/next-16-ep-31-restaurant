"use client"

import Link from "next/link"
import { SheetNav } from "./SheetNav"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { navLinks } from "@/data/nav-links"
import { AnimatedThemeToggler } from "./ui/animated-theme-toggler"
import Image from "next/image"
import { Button } from "./ui/button"
import SpecialButton from "./SpecialButton"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className='fixed top-0 z-50 h-24 bg-background/50 backdrop-blur-md w-full border-b-2 flex justify-between items-center px-4 md:px-8'>
      <Link
        href='/'
        className='flex items-center gap-2 group'
        aria-label='Strona główna'
      >
        <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>
          <Image src="/images-home/logo.webp" alt="Vercel Logo" width={80} height={80} className="object-contain rounded-full" />
        </div>
         <div className='hidden md:flex flex-col'>
          <h1 className='text-lg md:text-4xl font-bold tracking-tight'>
           Still Sea
          </h1>
          <p className='text-lg text-gray-500 dark:text-gray-400 text-center'>
            Restaurant
          </p>
        </div>
      </Link>

      <div className='hidden lg:flex items-center gap-2'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-3  transition-colors rounded-md px-3 py-2 text-xl font-medium ",
              pathname === link.href &&
                "text-primary",
            )}
          >
            <span className={cn("w-3 h-3 rounded-full bg-primary hidden ", pathname === link.href && "block animate-ping")}></span>
            <span>{link.label}</span>
          </Link>
        ))}
        <SpecialButton link="/reservation" label="Reservation" />
      </div>

      <div className='flex items-center gap-3 md:gap-6'>
        <div className='flex items-center gap-2 border-l pl-2 md:pl-4 ml-2'>
          <SheetNav />
          <AnimatedThemeToggler />
        </div>
      </div>
    </div>
  )
}

export default Navbar
