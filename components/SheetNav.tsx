"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { BookText, List } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { navLinks } from "@/data/nav-links"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "./ui/button"
import SpecialButton from "./SpecialButton"

export function SheetNav() {
  const pathname = usePathname()
  return (
    <Sheet >
      <Tooltip>
        <SheetTrigger asChild className='lg:hidden'>
          <TooltipTrigger asChild>
            <List className='size-6 cursor-pointer ' />
          </TooltipTrigger>
        </SheetTrigger>
        <TooltipContent>
          <p>Menu</p>
        </TooltipContent>
      </Tooltip>
      <SheetContent className='lg:hidden   opacity-75 overflow-y-auto sheet-content'>
        <SheetHeader>
          <SheetTitle className='text-xl font-semibold underline underline-offset-4'>
            <Link href='/' className='flex items-center gap-2'>
              <div className='text-2xl group-hover:scale-110 transition-transform duration-300'>
          <Image src="/images-home/logo.webp" alt="Vercel Logo" width={50} height={50} className="object-contain rounded-full" />
        </div>
              Menu
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className='flex flex-col items-start gap-4 text-xl italic font-semibold p-4'>
          <div className='flex flex-col gap-4'>
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
        </div>
      </SheetContent>
    </Sheet>
  )
}
