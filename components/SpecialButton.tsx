"use client"
import { Button } from './ui/button'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface SpecialButtonProps {
  link: string
  label: string
  onClick? : () => void
  className?: string
}

const SpecialButton = ({link, label, onClick, className}: SpecialButtonProps) => {
  return (
   <Button asChild  className={cn("h-12 w-fit px-8 text-xl bg-background text-background-foreground hover:bg-primary transition-all duration-600 border-2 border-primary rounded-bl-none rounded-tr-none rounded-br-3xl rounded-tl-3xl focus:bg-primary", className)} onClick={onClick} >  
          <Link href={link}>
              {label}
          </Link>
        </Button>
  )
}

export default SpecialButton