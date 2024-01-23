import Image from 'next/image'
import React from 'react'

const Topbar = () => {
  return (
    <div className='fixed w-full top-0 left-0 bg-black/10 backdrop-blur-md flex justify-between px-4 py-2 items-center border-b border-white/10'>

        <Image
            src={'/icons/menu.svg'}
            width={28}
            height={28}
            className=''
        />
        <Image
            src={'/images/logo-azul.png'}
            width={130}
            height={20}
            className='drop-shadow-[0_0_0.3rem_#ffffff70] -translate-y-1'
        />
        <Image
            src={'/icons/sun-rising-loop.svg'}
            width={28}
            height={28}
            className=''
        />

    </div>
  )
}

export default Topbar