import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <div className="flex items-center justify-center gap-4">
        <h1 className="text-4xl tracking-[-0.84px]">404</h1>
        <p className="text-sm">Page not found</p>
      </div>
      <Link href="/" className="mt-6">
        <Button className="w-fit cursor-pointer rounded-none bg-black px-6 py-4 text-white hover:bg-black/80 sm:mt-0">
          <span className="text-sm leading-[16.8px] tracking-[-0.59px]">Back to home</span>
        </Button>
      </Link>
    </div>
  )
}
