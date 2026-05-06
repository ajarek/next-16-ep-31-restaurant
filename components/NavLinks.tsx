import { navLinks } from "@/data/nav-links"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import SpecialButton from "./SpecialButton"

const NavLinks = () => {
  const pathname = usePathname()
  return (
    <nav
      role='navigation'
      aria-label='Main navigation'
      className='flex flex-col gap-4'
    >
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-label={link.label}
          className={cn(
            "flex items-center gap-3  transition-colors rounded-md px-3 py-2 text-xl font-medium ",
            pathname === link.href && "text-primary",
          )}
        >
          <span
            className={cn(
              "w-3 h-3 rounded-full bg-primary hidden ",
              pathname === link.href && "block animate-ping-custom",
            )}
          ></span>
          <span>{link.label}</span>
        </Link>
      ))}
      <SpecialButton link='/reservation' label='Reservation' />
    </nav>
  )
}

export default NavLinks
