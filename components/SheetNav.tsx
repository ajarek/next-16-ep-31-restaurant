"use client"

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { List } from "lucide-react"
import Link from "next/link"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Image from "next/image"
import NavLinks from "./NavLinks"

export function SheetNav() {
  return (
    <Sheet>
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
                <Image
                  src='/images-home/logo.webp'
                  alt='Vercel Logo'
                  width={50}
                  height={50}
                  className='object-contain rounded-full'
                  loading='eager'
                />
              </div>
              Menu
            </Link>
          </SheetTitle>
        </SheetHeader>
        <div className='flex flex-col items-start gap-4 text-xl italic font-semibold p-4'>
          <NavLinks isMobile={true}/>
        </div>
      </SheetContent>
    </Sheet>
  )
}
