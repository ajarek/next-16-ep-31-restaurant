
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-primary/20 to-secondary/10 flex flex-col items-center justify-center gap-4 p-4">
     <div className="flex gap-4">
       <div className="relative w-[358px] h-[328px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[200px] rounded-tl-[200px] overflow-hidden">

      <Image src="/images-home/hero-1.avif" alt="Vercel Logo" fill className="" />
      </div>
       <div className="relative w-[358px] h-[328px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[200px] rounded-tl-[200px] overflow-hidden">

      <Image src="/images-home/hero-2.avif" alt="Vercel Logo" fill className="" />
      </div>
       <div className="relative w-[358px] h-[328px] border-6 border-foreground rounded-bl-none rounded-tr-none rounded-br-[200px] rounded-tl-[200px] overflow-hidden">

      <Image src="/images-home/hero-3.avif" alt="Vercel Logo" fill className="" />
      </div>
    </div>
    </div>
  );
}
