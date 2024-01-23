'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='fixed z-50 bg-black/20 backdrop-blur-md w-full bottom-0 left-0 flex justify-around items-center py-3 border-t border-white/10'>
        <Link href={'/carta'} >
          <Image
              src={`/icons/${pathname === '/carta' ? 'cartaActive.svg' : 'carta.svg'}`}
              width={25}
              height={25}
              className={`${pathname === '/carta' ? '' : 'opacity-60'}`}
          />
        </Link>
        <Link href={'/'}>
          <Image
              src={`/icons/${pathname === '/' ? 'homeActive.svg' : 'home.svg'}`}
              width={25}
              height={25}
              className={`${pathname === '/' ? '' : 'opacity-60'}`}
          />
        </Link>
        <Link href={'/tragos'}>
        <Image
            src={`/icons/${pathname === '/tragos' ? 'cocktailActive.svg' : 'cocktail.svg'}`}
            width={25}
            height={25}
            className={`${pathname === '/tragos' ? '' : 'opacity-60'}`}
        />
        </Link>
    </nav>
  )
}

export default Navbar