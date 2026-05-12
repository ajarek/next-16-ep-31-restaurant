import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Restaurant Website",
  description: "A modern and responsive restaurant website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
      )}
    >
      <body className='min-h-full flex flex-col'>
        <TooltipProvider>
          <Navbar />
          <main className='flex-1'>{children}</main>
          <Toaster position='top-right' richColors closeButton theme='light' />
          <Footer />
        </TooltipProvider>
      </body>
    </html>
  )
}
