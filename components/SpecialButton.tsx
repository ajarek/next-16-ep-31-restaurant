import { Button } from './ui/button'
import Link from 'next/link'
const SpecialButton = ({link, label}: {link: string, label: string}) => {
  return (
   <Button asChild  className="h-12 px-8 text-xl bg-background text-background-foreground hover:bg-primary transition-all duration-600 border-2 border-primary rounded-bl-none rounded-tr-none rounded-br-3xl rounded-tl-3xl">  
          <Link href={link}>
              {label}
          </Link>
        </Button>
  )
}

export default SpecialButton