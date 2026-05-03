import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-4xl font-bold">Home</h1>
      <Button className="h-12 text-xl px-8 cursor-pointer">Test</Button>
    </div>
  );
}
