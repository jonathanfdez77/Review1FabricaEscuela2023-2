import React from 'react';
import { aceptarServicio, rechazarServicio } from '../../services/ServicioComponent';


export const ClienteAceptaSocio = () => {
  const handleAccept = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      // Llama a la función para aceptar el servicio
      const response = await aceptarServicio(3); 
      alert('Socio Aceptado');
    } catch (error) {
      // Maneja el error si la solicitud falla
      console.error('Error al aceptar el servicio', error);
    }
  };

  const handleReject = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    try {
      // Llama a la función para rechazar el servicio
      const response = await rechazarServicio(1); 
    } catch (error) {
      // Maneja el error si la solicitud falla
      console.error('Error al rechazar el servicio', error);
    }
    window.open('/solicitarServicioPasajero', '_self');
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
          <div className='w-[1059px] h-[60px]'>
            <div className='fixed w-[1059px] h-[60px] top-200 left-100 bg-[#1f9c14] rounded-[31px_31px_0px_0px]' />
            <div className='w-[637px] h-[38px]'>
              <p className="fixed top-230 left-180 [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[25px] tracking-[0] leading-[normal] whitespace-nowrap">
                ¡Te hemos encontrado el socio más cercano!
              </p>
            </div>
          </div>
          <span className="[font-family:'Roboto-Bold',Helvetica] font-bold text-black text-3xl">
            Chevrolet Sail
          </span>
          <div className='flex justify-center m-2'>
            <img
              className=' w-[100px] h-[100px] top-0 left-0 object-cover'
              alt='My Location'
              src='/img/senor.png'
            />
            <span className="[font-family:'Roboto-Bold',Helvetica] text-black text-2xl ml-2">
              Martín Sanín
            </span>
            <p className="text-left pl-5 w-[501px] top-0 left-0 [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[18px] tracking-[0] leading-[normal]">
              (Modelo 2013. JHS-342)
            </p>
          </div>
          <button
            className='m-4 px-5 py-1  bg-[#0979ea] rounded-lg text-[#f4f0f0] text-2xl hover:bg-[#0994ea]'
            onClick={handleAccept}
          >
            Aceptar
          </button>
          <button
            className='m-4 px-5 py-1  bg-[#0979ea] rounded-lg text-[#f4f0f0] text-2xl hover:bg-[#0994ea]'
            onClick={handleReject}
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClienteAceptaSocio;
