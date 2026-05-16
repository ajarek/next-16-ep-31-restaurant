import { navLinks } from "@/data/nav-links"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import SpecialButton from "./SpecialButton"
import { useSession } from "@/lib/auth-client"
import type { AuthUser } from "@/types/auth"

const NavLinks = ({isMobile}: {isMobile?: boolean}) => {
  const { data: session } = useSession()
  const user = session?.user as AuthUser | undefined
  const isAdmin = user?.role === "admin"
  const pathname = usePathname()
  return (
    <nav
      role='navigation'
      aria-label='Main navigation'
      className={cn("flex flex-col items-center gap-4", !isMobile && "flex-row")}
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
      <SpecialButton link='/reservation' label='Reservation'  /> 
       {isAdmin&&(
        <Link
          href='/admin'
          className='text-xl font-medium'
        >
          Admin
        </Link>
        )}
    </nav>
  )
}

export default NavLinks
