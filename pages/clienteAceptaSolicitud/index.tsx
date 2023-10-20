import React from 'react';

export const ClienteAceptaSolicitud = () => {
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
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
        <img
          className=' w-[76px] h-[75px] top-0 left-100'
          alt='Accessibility'
          src='/img/accessibility_new.png'
        />
      </div>
      <div className='h-[644px] w-[1144px] m-10 bg-[url(/img/MapaFull.png)] rounded-sm'>
        <div className='bg-white rounded-lg mx-10 mt-80 text-center'>
          <span className="[font-family:'Roboto-Bold',Helvetica] font-bold text-black text-3xl">
            $30.000 COP
          </span>
          <div className='flex justify-center m-2'>
            <img
              className=' w-[27px] h-[32px] top-0 left-0 object-cover'
              alt='My Location'
              src='/img/my_location.png'
            />
            <span className="[font-family:'Roboto-Bold',Helvetica] text-black text-2xl ml-2">
              Origen:
            </span>
            <p className="text-left pl-5 w-[501px] top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[18px] tracking-[0] leading-[normal]">
              Cl. 73 #73A-79, Pilarica, Medellín, Robledo, Medellín, Antioquia.
            </p>
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
            <p className="text-left pl-4 w-[501px] top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[18px] tracking-[0] leading-[normal]">
              Cl. 67 #53-108, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia.
            </p>
          </div>
          <button
            className='m-4 px-5 py-1  bg-[#0979ea] rounded-lg text-[#f4f0f0] text-2xl hover:bg-[#0994ea]'
            onClick={handleSubmit}
          >
            Aceptar
          </button>
          <button
            className='m-4 px-5 py-1  bg-[#0979ea] rounded-lg text-[#f4f0f0] text-2xl hover:bg-[#0994ea]'
            onClick={handleSubmit}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};




export default ClienteAceptaSolicitud;
