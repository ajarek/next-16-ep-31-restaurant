import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "sonner"
import { ThemeProvider } from "next-themes"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    template: "%s | Still Sea Restaurant",
    default: "Still Sea Restaurant — Fine Dining in Kołobrzeg",
  },
  description:
    "Experience fine dining at Still Sea in Kołobrzeg, Poland. Modern culinary artistry meets timeless elegance. Book your table for an unforgettable dining experience.",
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
      suppressHydrationWarning
    >
      <body className='min-h-full flex flex-col'>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <Navbar />
            <main className='flex-1'>{children}</main>
            <Toaster position='top-right' richColors closeButton theme='light' />
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
