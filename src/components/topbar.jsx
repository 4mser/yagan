'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatDuration, intervalToDuration } from 'date-fns';
import { es } from 'date-fns/locale';
import Link from 'next/link';
import Logo from './logo';

const Topbar = () => {

    /* TIME  */

    const [timeUntilHappyHour, setTimeUntilHappyHour] = useState('');

    useEffect(() => {
        const updateTimer = () => {
            const now = new Date();
            const sixPM = new Date(now);
            sixPM.setHours(18, 0, 0, 0); // Establece la hora a las 6 PM

            // Si ya pasaron las 6 PM, ajusta para el próximo día
            if (now > sixPM) {
                sixPM.setDate(sixPM.getDate() + 1);
            }

            const duration = intervalToDuration({ start: now, end: sixPM });
            setTimeUntilHappyHour(formatDuration(duration, { locale: es })); // Formato en español
        };

        const timerId = setInterval(updateTimer, 1000); // Actualiza cada segundo

        // Limpieza del intervalo cuando el componente se desmonte
        return () => clearInterval(timerId);
    }, []);

    /* ---- */
    const [openMenu, setOpenMenu] = useState(false)
    const handleMenu = () => {
        setOpenMenu(!openMenu)
    }

    const [openHappy, setOpenHappy] = useState(false)
    const handleHappy = () => {
        setOpenHappy(!openHappy)
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


    /* Happy Our */

    const happyVariants = {
        open: { 
            opacity: 1, 
            y: "-20%",
            backdropFilter: "blur(10px)", // Ajusta el valor de blur según tus necesidades
            transition: {
                type: "tween",
                duration: 0.3,
                backdropFilter: { duration: 0.3 } // Asegúrate de que la transición del blur sea suave
            }
        },
        closed: { 
            opacity: 0, 
            y: "100%",
            backdropFilter: "blur(0px)",
            transition: {
                type: "tween",
                duration: 0.3,
                backdropFilter: { duration: 0.3 }
            }
        },
    }

    const backdropHappyVariants = {
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
            <div className='fixed z-50 w-full top-0 left-0 bg-dark-1  flex justify-between px-4 py-2 items-center border-b border-white/20'>

                <button onClick={handleMenu}>
                    <Image
                        src={'/icons/menu.svg'}
                        width={28}
                        height={28}
                        className=''
                    />
                </button>
                <Logo />
                <button onClick={handleHappy}>
                    <Image
                        src={'/icons/dizzy.svg'}
                        width={28}
                        height={28}
                        className=''
                    />
                </button>

                </div>

                <AnimatePresence>
                {openMenu && (
                    <>
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
                                className='w-fit min-h-screen bg-dark-1 border-r border-white/10   p-8 pt-20 pr-20 flex flex-col gap-6'
                                variants={menuVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >

                                <Link href={'/'}>
                                    <li className='flex items-center gap-3 '>
                                            <img src="/icons/home-diamond.svg" alt="" />
                                            Inicio
                                    </li>
                                </Link>

                                <li className='flex items-center gap-3 '>
                                    <img src="/icons/hotel.svg" alt="" />
                                    Hotel
                                </li>
                                
                                <li className='flex items-center gap-3 '>
                                    <img src="/icons/bow-and-arrow.svg" alt="" />
                                    Historia y Patrimonio
                                </li>
                                
                                <li className='flex items-center gap-3 '>
                                    <img src="/icons/fox.svg" alt="" />
                                    Biodiversidad
                                </li>

                                <li className='flex items-center gap-3 '>
                                    <img src="/icons/recycling.svg" alt="" />
                                    Sostenibilidad
                                </li>

                                <li className='flex items-center gap-3 '>
                                    <img src="/icons/paint.svg" alt="" />
                                    Arte y Diseño
                                </li>

                                <li className='flex items-center gap-3 '>
                                    <img src="/icons/events.svg" alt="" />
                                    Eventos
                                </li>

                                <li className='flex items-center gap-3 '>
                                    <img src="/icons/contact.svg" alt="" />
                                    Contacto
                                </li>
                                
                            </motion.ul>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {openHappy && (
                        <motion.div 
                            className='fixed z-50 left-0 top-0 w-full min-h-screen backdrop-blur-xl flex justify-center items-center'
                            variants={backdropHappyVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            onClick={handleHappy}
                        >
                            <motion.div 
                                className='w-fit  ounded-2xl items-center   p-10 flex flex-col gap-4'
                                variants={happyVariants}
                                initial="closed"
                                animate="open"
                                exit="closed"
                            >
                                <img src="https://app-valdi.s3.amazonaws.com/yagan/anuncios/happyHour.png" alt="hH" className='w-full object-contain px-5 animate-neon' />
                                <p className='text-center'>Quedan: {timeUntilHappyHour} para el happy hour</p>
                            </motion.div>
                        </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Topbar
