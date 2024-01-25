'use client'
import Link from 'next/link';
import Image from 'next/image'

import { usePathname } from "next/navigation"


const Logo = () => {
  const pathname = usePathname()
  return (
    <Link href={'/'}>
        <Image
            src={'/images/logo-rojo.png'}
            width={130}
            height={20}
            className={`-translate-y-1 ${pathname === '/tragos' ? '-hue-rotate-[170deg] saturate-150 brightness-150' : ''}`}
        />
    </Link>
  )
}

export default Logo