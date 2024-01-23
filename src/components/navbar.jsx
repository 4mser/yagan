import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <nav className='fixed w-full bottom-0 left-0 flex justify-around items-center py-4 border-t border-white/10'>
      <Image
            src={'/icons/carta.svg'}
            width={25}
            height={25}
            className='opacity-60'
        />
        <Image
            src={'/icons/home.svg'}
            width={25}
            height={25}
            className='opacity-60 '
        />
        <Image
            src={'/icons/cocktail.svg'}
            width={25}
            height={25}
            className='opacity-60'
        />
    </nav>
  )
}

export default Navbar