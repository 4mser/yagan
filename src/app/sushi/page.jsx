'use client'
import React, { useRef } from 'react';
import { menuSections } from "@/utils/menuYagan";

// Función para limpiar el título y usarlo como id
const sanitizeTitle = (title) => title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

const Page = () => {
  const navigateToSection = (title) => {
    const sectionId = sanitizeTitle(title);
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      window.scrollTo({
        top: sectionElement.offsetTop - 134, // Ajusta este valor según sea necesario
        behavior: 'smooth'
      });
    }
  };

  // Ref para el contenedor de la barra de navegación
  const navRef = useRef(null);

  return (
    <>
      {/* Barra de navegación deslizable en la parte superior */}
      <div ref={navRef} className='fixed top-14 border-b border-white/10 bg-black left-0 w-full z-10 overflow-x-auto flex py-4 px-4 gap-3'>
        {menuSections.map((section, index) => (
          <button
            key={index}
            className='text-[12px] py-3 px-4 border whitespace-nowrap  border-white/10 rounded-lg'
            onClick={() => navigateToSection(section.title)}
          >
            {section.title}
          </button>
        ))}
      </div>

      {/* Contenido principal del menú */}
      <div className='pt-[117px]'>
        {menuSections.map((section, index) => (
          <div key={index} id={sanitizeTitle(section.title)} className='mt-4'>
            <h2 className={`text-lg font-semibold bg-gradient-to-tr ${section.gradientFrom} ${section.gradientTo} flex items-center px-4 py-3`}>
              {section.title}
            </h2>
            <ul className='text-xs flex flex-col mb-3'>
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className='flex justify-between items-center px-4 py-1 mt-3 gap-8'>
                  <div>
                    <h1 className='font-semibold'>{item.name}</h1>
                    <p className='font-normal opacity-70'>{item.description}</p>
                  </div>
                  <div className={`min-w-20 border ${section.priceColor} ${section.borderColor} px-2 rounded-lg`}>
                    <p className='w-full text-sm text-center font-medium'>
                      ${item.price}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Page;
