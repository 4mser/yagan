/* 'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const Topbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

  return (
    <>
        <div className='fixed z-50 w-full top-0 left-0 bg-[#141414]  flex justify-between px-4 py-2 items-center border-b border-white/10'>

            <button onClick={handleMenu}>
                <Image
                    src={'/icons/menu.svg'}
                    width={28}
                    height={28}
                    className=''
                />
            </button>
            <Image
                src={'/images/logo-azul.png'}
                width={130}
                height={20}
                className=' -translate-y-1'
            />
            <Image
                src={'/icons/sun-rising-loop.svg'}
                width={28}
                height={28}
                className=''
            />

        </div>

        {openMenu && (
            <div className='fixed z-50 left-0 top-0 w-full min-h-[100dvh] bg-dark-1/80  overflow-hidden' onClick={handleMenu}> 
                <ul className='w-1/2 min-h-[100dvh] bg-dark-1 border-r border-white/10'>
                    <li>Logos</li>
                    <li>Hotel</li>
                    <li>Blabla</li>
                </ul>
            </div>
        )}
    </>
  )
}

export default Topbar */
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Topbar = () => {
    const [openMenu, setOpenMenu] = useState(false)
    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const menuVariants = {
        open: { 
            opacity: 1, 
            x: 0,
            backdropFilter: "blur(10px)", // Ajusta el valor de blur según tus necesidades
            transition: {
                type: "tween",
                duration: 0.3,
                backdropFilter: { duration: 0.3 } // Asegúrate de que la transición del blur sea suave
            }
        },
        closed: { 
            opacity: 0, 
            x: "-100%",
            backdropFilter: "blur(0px)",
            transition: {
                type: "tween",
                duration: 0.3,
                backdropFilter: { duration: 0.3 }
            }
        },
    }

    const backdropVariants = {
        open: { 
            opacity: 1, 
            transition: { duration: 0.3 } 
        },
        closed: { 
            opacity: 0, 
            transition: { duration: 0.3 } 
        },
    }

    return (
        <>
            <div className='fixed z-50 w-full top-0 left-0 bg-[#141414]  flex justify-between px-4 py-2 items-center border-b border-white/10'>

                <button onClick={handleMenu}>
                    <Image
                        src={'/icons/menu.svg'}
                        width={28}
                        height={28}
                        className=''
                    />
                </button>
                <Image
                    src={'/images/logo-azul.png'}
                    width={130}
                    height={20}
                    className=' -translate-y-1'
                />
                <Image
                    src={'/icons/sun-rising-loop.svg'}
                    width={28}
                    height={28}
                    className=''
                />

                </div>

                <AnimatePresence>
                {openMenu && (
                    <>
                        {/* Fondo semi-transparente */}
                        <motion.div 
                            className='fixed z-40 left-0 top-0 w-full min-h-screen bg-black/30'
                            variants={backdropVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        />

                        {/* Div con backdrop-blur */}
                        <motion.div 
                            className='fixed z-50 left-0 top-0 w-full min-h-screen backdrop-blur-sm'
                            variants={backdropVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={handleMenu}
                        >
                            <motion.ul 
                                className='w-1/2 min-h-screen bg-gradient-to-tr from-cyan-900 to-cyan-500 border-r border-white/10'
                                variants={menuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                {/* Elementos del menú */}
                            </motion.ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}

export default Topbar
