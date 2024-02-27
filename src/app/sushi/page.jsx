/* import React from 'react';

const Page = () => {

  const gohans = [
    {
      name: "GOHAN SHIRASHI EBI",
      description: "Arroz de sushi, cebollín, palta, queso crema, sésamo y camarón.",
      price: "9.990"
    },
    {
      name: "SHIRASHI EBI TERI",
      description: "Arroz de sushi, palta, queso crema, cebollín, sésamo, pollo teriyaki y camarón.",
      price: "10.990"
    },
    {
      name: "SHIRASHI PULPO",
      description: "Arroz de sushi, pulpo, queso crema, palmito, palta y cebollín.",
      price: "12.990"
    },
    {
      name: "SHIRASHI SAKE",
      description: "Arroz de sushi, palta, queso crema, cebollín, sésamo y salmón.",
      price: "9.990"
    },
    {
      name: "SHIRASHI SUPER EXPERTO",
      description: "Arroz de sushi, Atún, masago, palta, salmón, camarón, wasabi y jengibre.",
      price: "14.990"
    },
    {
      name: "SHIRASHI TERI",
      description: "Arroz de sushi, cebollín, palta, sésamo, queso crema y pollo teriyaki.",
      price: "8.990"
    },
  ]

  const rollspecials = [
    {
      name: "ROLLS ACEVICHADO (70)",
      description: "Camarón Apanado, Queso Crema, Bañado en Salsa Acevichada y Coronado con Maní Crocante.",
      price: "6.900"
    },
    {
      name: "PREMIUM YAGAN (72)",
      description: "Salmón Apanado, Palta, Envuelto en Queso Crema Flameado Coronado En Salsa Teriyaki y Papas Hilo.",
      price: "7.900"
    },{
      name: "ROLLS CEVICHE (76)",
      description: "Salmón, Queso Crema, Cebollín envuelto en Palta Bañado en Ceviche de la Casa.",
      price: "8.500"
    },{
      name: "RES ROLLS (78)",
      description: "Filete de Res, Queso Mantecoso, apanado en panko bañado con salsa acevichada y tiritas de wantan.",
      price: "7.800"
    },{
      name: "EBI ACEVICHADO (79)",
      description: "Salmón Apanado, Queso Crema envuelto en Palta y Camarón Acevichado.",
      price: "7.900"
    },{
      name: "MEXICAN ROLLS (80)",
      description: "Pollo Apanado, ciboullete, queso crema envuelto en sesamo coronado con Guacamole.",
      price: "7.900"
    },
  ]

  const envueltospalta = [
    {
      name: "EBI TERIYAKI (1)",
      description: "Camarón, Cebollín, Queso Crema envuelto en Palta Bañado en Pollo Teriyaky y Sésamo",
      price: "7.200"
    },
    {
      name: "PREMIUM (3)",
      description: "Salmón, Ciboullete, Queso Crema envuelto en Palta.",
      price: "6.900"
    },
    {
      name: "EBI CHEESE (4)",
      description: "Camarón, Cebollín, Queso Crema envuelto en Palta.",
      price: "6.900"
    },
    {
      name: "CHICKEN LIGHT (5)",
      description: "Pollo, Cebollín, Queso Crema envuelto en Palta.",
      price: "6.800"
    },
    {
      name: "EBI TEMPURA (6)",
      description: "Camarón Tempura, Queso Crema envuelto en Palta.",
      price: "6.900"
    },
    {
      name: "OKAMA ROLLS (10)",
      description: "Pollo, Queso Crema, Nuez envuelto en Palta Bañado en Salsa Acevichada.",
      price: "6.900"
    },
  ]
  return (
    <div className='pt-14'>
      <div>
      <h2 className='text-lg font-semibold bg-gradient-to-tr from-red-700 to-red-950  flex items-center px-4 py-3'>SUSHI ROLL SPECIAL {'(9 PIEZAS)'}</h2>
          {rollspecials.map((rolls, index) => (
            <li key={index} className='flex justify-between items-center px-4 py-1 mt-3 gap-10'>
              <div className=''>
                <h1 className='font-semibold text-xs'>
                  {rolls.name}
                </h1>
                <p className='font-normal opacity-80 text-xs'>
                  {rolls.description}
                </p>
              </div>
              <div className='text-sm w-20 text-center font-medium border text-red-500 border-red-500 px-2 rounded-lg'>
                ${rolls.price}
              </div>
            </li>
          ))}
        <br />
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-red-950 to-amber-500  flex items-center px-4 py-3'>GOHAN</h2>
        <ul className='text-xs  flex  flex-col'>
          {gohans.map((gohan, index) => (
            <li key={index} className='flex justify-between items-center px-4 py-1 mt-3 gap-8'>
              <div className=''>
                <h1 className='font-semibold'>
                  {gohan.name}
                </h1>
                <p className='font-normal opacity-80'>
                  {gohan.description}
                </p>
              </div>
                <span className='text-sm w-20 text-center font-medium border text-orange-400 border-orange-400 px-2 rounded-lg'>
                  ${gohan.price}
                </span>
            </li>
          ))}
          <br />
          <h2 className='text-lg font-semibold bg-gradient-to-tr from-green-700 to-yellow-600  flex items-center px-4 py-3'>SUSHI ROLL SPECIAL {'(9 PIEZAS)'}</h2>
          {envueltospalta.map((rolls, index) => (
            <li key={index} className='flex justify-between items-center px-4 py-1 mt-3 gap-10'>
              <div className=''>
                <h1 className='font-semibold text-xs'>
                  {rolls.name}
                </h1>
                <p className='font-normal opacity-80 text-xs'>
                  {rolls.description}
                </p>
              </div>
              <div className='text-sm w-20 text-center font-medium border text-lime-400 border-lime-400 px-2 rounded-lg'>
                ${rolls.price}
              </div>
            </li>
          ))}
          <br />
        </ul>
      </div>

      
    </div>
  );
}

export default Page;
 */

import React from 'react';

const Page = () => {
  const menuSections = [
    {
      title: "SUSHI ROLL SPECIAL (9 PIEZAS)",
      items: [
        {
          name: "ROLLS ACEVICHADO (70)",
          description: "Camarón Apanado, Queso Crema, Bañado en Salsa Acevichada y Coronado con Maní Crocante.",
          price: "6.900"
        },
        {
          name: "PREMIUM YAGAN (72)",
          description: "Salmón Apanado, Palta, Envuelto en Queso Crema Flameado Coronado En Salsa Teriyaki y Papas Hilo.",
          price: "7.900"
        },{
          name: "ROLLS CEVICHE (76)",
          description: "Salmón, Queso Crema, Cebollín envuelto en Palta Bañado en Ceviche de la Casa.",
          price: "8.500"
        },{
          name: "RES ROLLS (78)",
          description: "Filete de Res, Queso Mantecoso, apanado en panko bañado con salsa acevichada y tiritas de wantan.",
          price: "7.800"
        },{
          name: "EBI ACEVICHADO (79)",
          description: "Salmón Apanado, Queso Crema envuelto en Palta y Camarón Acevichado.",
          price: "7.900"
        },{
          name: "MEXICAN ROLLS (80)",
          description: "Pollo Apanado, ciboullete, queso crema envuelto en sesamo coronado con Guacamole.",
          price: "7.900"
        }
      ],
      gradientFrom: "red-700",
      gradientTo: "red-950",
      priceColor: "red-500"
    },
    {
      title: "ENVUELTOS EN PALTA (9 PIEZAS)",
      items: [
        {
          name: "EBI TERIYAKI (1)",
          description: "Camarón, Cebollín, Queso Crema envuelto en Palta Bañado en Pollo Teriyaky y Sésamo",
          price: "7.200"
        },
        {
          name: "PREMIUM (3)",
          description: "Salmón, Ciboullete, Queso Crema envuelto en Palta.",
          price: "6.900"
        },
        {
          name: "EBI CHEESE (4)",
          description: "Camarón, Cebollín, Queso Crema envuelto en Palta.",
          price: "6.900"
        },
        {
          name: "CHICKEN LIGHT (5)",
          description: "Pollo, Cebollín, Queso Crema envuelto en Palta.",
          price: "6.800"
        },
        {
          name: "EBI TEMPURA (6)",
          description: "Camarón Tempura, Queso Crema envuelto en Palta.",
          price: "6.900"
        },
        {
          name: "OKAMA ROLLS (10)",
          description: "Pollo, Queso Crema, Nuez envuelto en Palta Bañado en Salsa Acevichada.",
          price: "6.900"
        }
      ],
      gradientFrom: "green-700",
      gradientTo: "yellow-500",
      priceColor: "lime-400"
    },
    {
      title: "GOHAN",
      items: [
        {
          name: "GOHAN SHIRASHI EBI",
          description: "Arroz de sushi, cebollín, palta, queso crema, sésamo y camarón.",
          price: "9.990"
        },
        {
          name: "SHIRASHI EBI TERI",
          description: "Arroz de sushi, palta, queso crema, cebollín, sésamo, pollo teriyaki y camarón.",
          price: "10.990"
        },
        {
          name: "SHIRASHI PULPO",
          description: "Arroz de sushi, pulpo, queso crema, palmito, palta y cebollín.",
          price: "12.990"
        },
        {
          name: "SHIRASHI SAKE",
          description: "Arroz de sushi, palta, queso crema, cebollín, sésamo y salmón.",
          price: "9.990"
        },
        {
          name: "SHIRASHI SUPER EXPERTO",
          description: "Arroz de sushi, Atún, masago, palta, salmón, camarón, wasabi y jengibre.",
          price: "14.990"
        },
        {
          name: "SHIRASHI TERI",
          description: "Arroz de sushi, cebollín, palta, sésamo, queso crema y pollo teriyaki.",
          price: "8.990"
        }
      ],
      gradientFrom: "red-950",
      gradientTo: "amber-500",
      priceColor: "yellow-500"
    },
  ];

  return (
    <div className='pt-14'>
      {menuSections.map((section, index) => (
        <div key={index}>
          <h2 className={`text-lg font-semibold bg-gradient-to-tr from-${section.gradientFrom} to-${section.gradientTo} flex items-center px-4 py-3`}>
            {section.title}
          </h2>
          <ul className='text-xs flex flex-col mb-3'>
            {section.items.map((item, itemIndex) => (
              <li key={itemIndex} className='flex justify-between items-center px-4 py-1 mt-3 gap-8'>
                <div>
                  <h1 className='font-semibold'>{item.name}</h1>
                  <p className='font-normal opacity-80'>{item.description}</p>
                </div>
                <span className={`text-sm w-20 text-center font-medium border text-${section.priceColor} border-${section.priceColor} px-2 rounded-lg`}>
                  ${item.price}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Page;
