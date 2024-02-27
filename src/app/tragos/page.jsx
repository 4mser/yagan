import React from 'react';

const Page = () => {

  const tragos = [
    {
      name: "CERVEZA KROSS 470 CM3",
      description: "",
      price: "3.490"
    },
    {
      name: "VINO BOTELLA",
      description: "",
      price: "15.000"
    },
    {
      name: "GIN",
      description: "",
      price: "7.000"
    },
    {
      name: "RAMAZZOTI",
      description: "",
      price: "7.000"
    },
    {
      name: "PISCO SOUR CATEDRAL",
      description: "",
      price: "4.990"
    },
    {
      name: "JACK DANIELS GENTLEMAN",
      description: "",
      price: "8.990"
    },
    {
      name: "MOJITO",
      description: "",
      price: "4.600"
    },
    {
      name: "JACK DANIELS",
      description: "",
      price: "7.490"
    },
    {
      name: "MOJITO SABORES",
      description: "",
      price: "5.590"
    },
    {
      name: "PISCOLA",
      description: "",
      price: "6.000"
    },
    {
      name: "PISCOLA 2X",
      description: "",
      price: "9.990"
    }
  ]
  return (
    <div className='pt-14'>
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr to-cyan-500 from-blue-950 flex items-center px-4 py-3'>TRAGOS</h2>
        <ul className='text-xs p-4 flex gap-3 flex-col'>
          {tragos.map((trago, index) => (
            <li key={index}>
              <div className='flex items-center justify-between'>
                <h1 className='font-semibold'>
                  {trago.name}
                </h1>
                <span className='text-sm w-20 text-center font-medium border text-cyan-400 border-cyan-400 px-2 rounded-lg'>
                  ${trago.price}
                </span>
              </div>
              <p className='font-normal opacity-80'>
                {trago.description}
              </p>
            </li>
          ))}
          <br />
          
        </ul>
      </div>

      
    </div>
  );
}

export default Page;
