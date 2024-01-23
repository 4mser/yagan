import Link from 'next/link'
import React from 'react'

const Banner = () => {
  return (
    <Link href={'/carta'} >
        <div className='fixed w-full top-14 h-10 left-0 bg-gradient-to-tr from-cyan-500 to-cyan-800 flex justify-center gap-2 px-4 py-2 items-center border-b border-white/10 '>

            <p>Explora el nuevo Menú</p>
            <img src="/icons/shines.png" alt="" className='w-6' />

            </div>
    </Link>
  )
}

export default Banner