import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <Link href={'/carta'} >
        <div className='fixed w-full top-14 h-12 left-0 bg-gradient-to-tr from-red-600 to-red-900 flex justify-center gap-2 px-4 py-2 items-center border-b border-white/10 '>

            <p>Explora la nueva barra de Sushi</p>
            <img src="/icons/sushi.svg" alt="" className='w-6' />

            </div>
    </Link>
  )
}

export default Banner