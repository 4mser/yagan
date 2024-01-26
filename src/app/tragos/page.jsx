import React from 'react';

const Page = () => {
  return (
    <div className='pt-14'>
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-cyan-600 to-blue-950 flex items-center px-4 py-3'>CLÁSICOS</h2>
        <ul className='list-disc list-inside text-xs p-4'>
          <li >
            <strong>Piscola:</strong> Pisco - <span className='classic-price text-green-500'>$8</span>
            <br /> Pisco.
          </li>
          <li >
            <strong>Pisco Sour:</strong> Limón, pisco, goma, albumina, amargo de Angostura - <span className='classic-price text-green-500'>$9</span>
            <br /> Limón, pisco, goma, albumina, amargo de Angostura.
          </li>
          {/* Agrega otros tragos clásicos aquí */}
        </ul>
      </div>

      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-lime-500 to-green-950 flex items-center px-4 py-3'>MOJITOS</h2>
        <ul className='list-disc list-inside text-xs p-4'>
          <li >
            <strong>Mojito Tradicional:</strong> Menta, limones, ron blanco, limón, goma, agua mineral - <span className='classic-price text-green-500'>$10</span>
            <br /> Menta, limones, ron blanco, limón, goma, agua mineral.
          </li>
          <li >
            <strong>Mojito Ramazzotti:</strong> Menta, naranja, limón, ron blanco, jugo de naranja, Ramazzotti, agua mineral - <span className='classic-price text-green-500'>$11</span>
            <br /> Menta, naranja, limón, ron blanco, jugo de naranja, Ramazzotti, agua mineral.
          </li>
          {/* Agrega otros mojitos aquí */}
        </ul>
      </div>
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-indigo-400 to-indigo-950 flex items-center px-4 py-3'>AUTOR</h2>
        <ul className='list-disc list-inside text-xs p-4'>
          <li >
            <strong>Cazador Furtivo:</strong> Jägermeister, triple sec, limón, jugo de naranja - <span className='classic-price text-green-500'>$12</span>
            <br /> Jägermeister, triple sec, limón, jugo de naranja.
          </li>
          <li >
            <strong>Amore Milano:</strong> Whisky, Campari, jugo de pomelo, jugo de limón, goma - <span className='classic-price text-green-500'>$13</span>
            <br /> Whisky, Campari, jugo de pomelo, jugo de limón, goma.
          </li>
          {/* Agrega otros tragos de autor aquí */}
        </ul>
      </div>
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-gray-500 to-gray-950 flex items-center px-4 py-3'>BAR SIN ALCOHOL</h2>
        <ul className='list-disc list-inside text-xs p-4'>
          <li >
            <strong>Jugos del Día:</strong> Variedad de jugos frescos disponibles diariamente - <span className='classic-price text-green-500'>$6</span>
            <br /> Variedad de jugos frescos disponibles diariamente.
          </li>
          <li >
            <strong>Cordillerano Autor:</strong> Amargo de Angostura, Sprite, azahar, soda, limón - <span className='classic-price text-green-500'>$7</span>
            <br /> Amargo de Angostura, Sprite, azahar, soda, limón.
          </li>
        </ul>
      </div>
      <div>
        <h2 className='text-lg font-semibold bg-gradient-to-tr from-yellow-300 to-yellow-950 flex items-center px-4 py-3'>MICHELADAS</h2>
        <ul className='list-disc list-inside text-xs p-4'>
          <li >
            <strong>Chelada Sal de Autor:</strong> Sal de autor - <span className='classic-price text-green-500'>$5</span>
            <br /> Sal de autor.
          </li>
          <li >
            <strong>Michelada:</strong> Tabasco, merken, sal de autor, salsa inglesa - <span className='classic-price text-green-500'>$5</span>
            <br /> Tabasco, merken, sal de autor, salsa inglesa.
          </li>
          <li >
            <strong>Michelada Bloody:</strong> Todo lo anterior más bloody de tomate - <span className='classic-price text-green-500'>$6</span>
            <br /> Todo lo anterior más bloody de tomate.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Page;
