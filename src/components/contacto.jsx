'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contacto = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Define las variantes para las animaciones
  const variants = {
    open: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 20 } },
    closed: { opacity: 0, scale: 0 }
  };

  return (
    <section className='fixed bottom-4 right-4'>
      <div className='rounded-full bg-gradient-to-tr from-slate-500 to-slate-800 w-14 h-14 flex justify-center items-center' onClick={toggleMenu}>
        <img src="/icons/pushpin.svg" alt="" className='w-7' />
      </div>

      <motion.div
        className='absolute bottom-0 right-16 rounded-full bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 w-10 h-10 flex justify-center items-center'
        variants={variants}
        animate={menuOpen ? "open" : "closed"}
      >
        <img src="/icons/instagram.svg" alt="" className='w-6 opacity-85' />
      </motion.div>

      <motion.div
        className='absolute bottom-16 right-0 rounded-full bg-gradient-to-tr from-red-500 to-red-900 w-10 h-10 flex justify-center items-center'
        variants={variants}
        animate={menuOpen ? "open" : "closed"}
      >
        <img src="/icons/mail.svg" alt="" className='w-6 opacity-85' />
      </motion.div>

      <motion.div
        className='absolute bottom-12 right-12 rounded-full bg-gradient-to-tr from-green-600 to-yellow-500 w-10 h-10 flex justify-center items-center'
        variants={variants}
        animate={menuOpen ? "open" : "closed"}
      >
        <img src="/icons/wsp.svg" alt="" className='w-6 opacity-85' />
      </motion.div>
    </section>
  )
}

export default Contacto;
