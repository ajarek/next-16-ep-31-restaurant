import Link from "next/link"
import { Flame, Phone, Mail, MapPin } from "lucide-react"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa6"
import { Separator } from "@/components/ui/separator"
import { navLinks } from "@/data/nav-links"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="w-full bg-background mt-24 px-8 sm:px-16 lg:px-24">
      <div className="  py-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section - Logo & Description */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Link href="/" className="flex items-center gap-3" aria-label="Home">
            <Image src="/images-home/logo.webp" alt="Vercel Logo" width={60} height={60} className="object-contain rounded-full" />
            <span className="text-3xl font-serif font-bold tracking-tight">Still Sea</span>
          </Link>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Sizzlo is more than a restaurant — it&apos;s where fine taste meets timeless ambiance. Join us for unforgettable dining moments, crafted with passion, precision, and elegance.
          </p>
        </div>

        {/* Right Section - Nav & Contact */}
        <div className="flex flex-col gap-10 md:w-2/3 md:items-end">
          {/* Navigation Links */}
          <nav className="flex flex-wrap md:justify-end gap-x-8 gap-y-4 font-semibold text-sm tracking-wide">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info & Socials */}
          <div className="flex flex-col sm:flex-row justify-between md:justify-end gap-10 md:gap-24 w-full">
            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="border border-primary rounded p-2 text-primary flex items-center justify-center">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold tracking-wide">+1.333.333.3333</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="border border-primary rounded p-2 text-primary flex items-center justify-center">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold tracking-wide">email@still-sea.com</span>
              </div>
              <div className="flex items-start gap-4">
                <div className="border border-primary rounded p-2 text-primary flex items-center justify-center">
                  <MapPin size={18} strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold leading-relaxed tracking-wide">
                  78-100 Kołobrzeg<br />Morska 152, Poland
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-5 sm:items-end">
              <Link href="#" className="flex items-center gap-4 hover:text-primary transition-colors group">
                <span className="text-sm font-semibold tracking-wide">Facebook</span>
                <div className="border border-primary rounded p-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <FaFacebook size={18} />
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-4 hover:text-primary transition-colors group">
                <span className="text-sm font-semibold tracking-wide">Instagram</span>
                <div className="border border-primary rounded p-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <FaInstagram size={18} />
                </div>
              </Link>
              <Link href="#" className="flex items-center gap-4 hover:text-primary transition-colors group">
                <span className="text-sm font-semibold tracking-wide">Youtube</span>
                <div className="border border-primary rounded p-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <FaYoutube size={18} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Divider & Copyright Section */}
      <div className="max-w-7xl mx-auto px-6 pb-10">
        <div className="relative flex items-center justify-center py-8">
          <Separator className="bg-primary w-full h-px" />
          <div className="absolute bg-background px-3">
           <Image src="/images-home/logo.webp" alt="Vercel Logo" width={40} height={40} className="object-contain rounded-full" />
          </div>
        </div>
        
        <div className="text-center flex flex-col gap-2 text-sm text-muted-foreground mt-2">
          <p className="font-medium tracking-wide">© 2026 Still Sea. All rights reserved.</p>
          <p className="tracking-wide">
             Designed by <Link href="#" className="underline italic hover:text-primary transition-colors">Ajarek Calvert</Link>  
          </p>
        </div>
      </div>
    </footer>
  )
}
