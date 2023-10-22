import React from 'react';
import { useState } from 'react';

export const SolicitarServicioPasajero = () => {
  const [origen, setOrigen] = useState('');
  const [destino, setDestino] = useState('');

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    {/*console.log(origen);
  console.log(destino);*/}
    window.open('/clienteAceptaSolicitud', '_self');
  };

  return (
    <div className='bg-[#007bf1] flex flex-col items-center h-screen w-screen'>
      <div className='flex w-full justify-between'>
        <button>
          <img
            className='h-20 hover:opacity-80'
            alt='Menu'
            src='/img/menu.png'
          />
        </button>
        <div className='w-[174px] h-[75px]'>
          <div className=" h-[75px] top-[0px] left-[200px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#eff0f7] text-[64px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
            SSMU
          </div>
        </div>
        <button>
          <img
            className=' w-[76px] h-[75px] top-0 left-100 hover:opacity-80'
            alt='Accessibility'
            src='/img/accessibility_new.png'
          />
        </button>
      </div>
      <div className='h-[644px] w-[1144px] m-10 bg-[url(/img/MapaFull.png)] rounded-sm'>
        <div className='bg-white rounded-lg mx-10 mt-80 text-center'>
          <span className="[font-family:'Roboto-Bold',Helvetica] font-bold text-black text-3xl">
            Solicitar Servicio
          </span>
          <div className='flex justify-center'>
            <img alt='Punto' src='/img/Punto.png' />
            <span className="[font-family:'Roboto-Bold',Helvetica] text-black text-2xl ml-2">
              Pasajero
            </span>
          </div>
          <div className='flex p-5'>
            <span className="[font-family:'Roboto-Regular',Helvetica] font-normal text-black text-2xl tracking-[0] leading-[normal] whitespace-nowrap">
              Ruta
            </span>
            <div className='w-full h-1 bottom-0 m-4 bg-[#d9d9d9]' />
          </div>
          <div className='flex justify-center m-2'>
            <img
              className=' w-[27px] h-[32px] top-0 left-0 object-cover'
              alt='My Location'
              src='/img/my_location.png'
            />
            <span className="[font-family:'Roboto-Bold',Helvetica] text-black text-2xl ml-2">
              Origen:
            </span>
            <input
              className='ml-5 bg-[#f4f0f0]'
              type='text'
              placeholder='Origen'
              onChange={(e) => setOrigen(e.target.value)}
              value={origen}
            />
          </div>
          <div className='flex justify-center m-2'>
            <img
              className=' w-[27px] h-[32px] top-0 left-0 object-cover'
              alt='My Location on'
              src='/img/location_on.png'
            />
            <span className="[font-family:'Roboto-Bold',Helvetica] text-black text-2xl ml-2">
              Destino:
            </span>
            <input
              className='ml-5 bg-[#f4f0f0]'
              type='text'
              placeholder='Destino'
              onChange={(e) => setDestino(e.target.value)}
              value={destino}
            />
          </div>
          <button
            className='m-4 px-5 py-1  bg-[#0979ea] rounded-lg text-[#f4f0f0] text-2xl hover:bg-[#0994ea]'
            onClick={handleSubmit}
          >
            Solicitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolicitarServicioPasajero;
