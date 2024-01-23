import Image from 'next/image'
import React from 'react'

const Topbar = () => {
  return (
    <div className='flex justify-between pt-4 items-center px-4'>

        <Image
            src={'/icons/menu.svg'}
            width={28}
            height={28}
            className='drop-shadow-[0_0_0.3rem_#ffffff70]'
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
            className='drop-shadow-[0_0_0.2rem_#ffffff70]'
        />

    </div>
  )
}

export default Topbar