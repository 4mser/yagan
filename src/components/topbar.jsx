import Image from 'next/image'
import React from 'react'

const Topbar = () => {
  return (
    <div className='flex justify-between pt-3 items-center px-3'>

        <Image
            src={'/icons/menu.svg'}
            width={30}
            height={30}
            className='drop-shadow-[0_0_0.3rem_#ffffff70]'
        />
        <Image
            src={'/images/logo-azul.png'}
            width={130}
            height={20}
            className='drop-shadow-[0_0_0.3rem_#ffffff70]'
        />
        <Image
            src={'/icons/sun-rising-loop.svg'}
            width={30}
            height={30}
            className='drop-shadow-[0_0_0.3rem_#ffffff70]'
        />

    </div>
  )
}

export default Topbar