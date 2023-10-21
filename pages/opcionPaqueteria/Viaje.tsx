import React from 'react';

export const Viaje = () => {
  return (
    <div className='bg-[#007bf1] flex flex-row justify-center w-full'>
      <div className='bg-[#007bf1] w-[1280px] h-[832px] relative'>
        <div className="absolute h-[75px] top-[25px] left-[153px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#eff0f7] text-[64px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
          SSMU
        </div>
        <img
          className='absolute w-[76px] h-[75px] top-[26px] left-[1167px]'
          alt='Accessibility'
          src='/img/accessibility_new.png'
        />
        <div className='absolute w-[1144px] h-[665px] top-[105px] left-[68px] bg-[url(/img/rectangle-13.png)] bg-cover bg-[50%_50%]'>
          <img
            className='absolute w-[1144px] h-[665px] top-[105px] left-[68px]'
            alt='Mapa'
            src='/img/MapaFull.png'
          />
          <img
            className='absolute w-[402px] h-[187px] top-[234px] left-[343px]'
            alt='Ellipse'
            src='ellipse-1.svg'
          />
          <div className='absolute w-[1057px] h-[354px] top-[270px] left-[47px] bg-white rounded-[31px] border border-solid border-[#007bf1]' />
          <div className='absolute w-[255px] h-[96px] top-[298px] left-[110px] bg-[#bed0ff] rounded-[10px] border-2 border-solid border-[#007bf1]' />
          <div className='inline-flex items-center gap-[182px] absolute top-[313px] left-[156px]'>
            <div className='w-[150px] relative h-[65px]'>
              <div className="absolute w-[53px] top-[22px] left-[95px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                Viaje
              </div>
              <img
                className='absolute w-[81px] h-[65px] top-0 left-0 object-cover'
                alt='Car'
                src='/img/Viaje.png'
              />
            </div>
            <div className='w-[174px] relative h-[65px]'>
              <img
                className='absolute w-[66px] h-[65px] top-0 left-0 object-cover'
                alt='Vegetable'
                src='/img/Mercado.png'
              />
              <div className="absolute top-[23px] left-[77px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
                Mercado
              </div>
            </div>
            <div className='w-[151px] mr-[-2.00px] relative h-[65px]'>
              <div className="absolute w-[89px] top-[23px] left-[60px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[24px] tracking-[0] leading-[normal]">
                Paquete
              </div>
              <img
                className='absolute w-[60px] h-[65px] top-0 left-0 object-cover'
                alt='Rectangle'
                src='/img/Paquete.png'
              />
            </div>
          </div>
          <img
            className='absolute w-[32px] h-[32px] top-[511px] left-[91px]'
            alt='Location on'
            src='/img/location_on.png'
          />
          <img
            className='absolute w-[32px] h-[32px] top-[424px] left-[91px]'
            alt='My location'
            src='my_location.png'
          />
          <div className="absolute top-[504px] left-[128px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            Destino:
          </div>
          <div className="absolute top-[420px] left-[143px] [font-family:'Roboto-Regular',Helvetica] font-normal text-black text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            Origen:
          </div>
          <img
            className='top-[533px] absolute w-[336px] h-[2px] left-[259px]'
            alt='Line'
            src='/img/Linea1.png'
          />
          <img
            className='top-[457px] absolute w-[336px] h-[2px] left-[259px]'
            alt='Line'
            src='/img/Linea1.png'
          />
          <div className='absolute w-[399px] h-[79px] top-[466px] left-[645px] bg-white rounded-[10px] border border-solid border-[#979797] shadow-[0px_4px_4px_#00000040]' />
          <div className="absolute top-[477px] left-[663px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
            Describe condiciones adicionales
          </div>
          <img
            className='absolute w-[38px] h-[37px] top-[417px] left-[1005px]'
            alt='Luggage'
            src='/img/luggage.png'
          />
          <div className="absolute top-[416px] left-[918px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
            Maletas
          </div>
          <div className="absolute top-[414px] left-[692px] [font-family:'Roboto-Regular',Helvetica] font-normal text-[#676363] text-[24px] tracking-[0] leading-[normal] whitespace-nowrap">
            Mascotas
          </div>
          <img
            className='absolute w-[29px] h-[31px] top-[413px] left-[803px]'
            alt='Pets'
            src='/img/pets.png'
          />
          <div className='absolute w-[165px] h-[48px] top-[567px] left-[498px] bg-[#0978ea] rounded-[10px]' />
          <div className="absolute top-[571px] left-[522px] [font-family:'Roboto-Regular',Helvetica] font-normal text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            Solicitar
          </div>
          <div className='absolute w-[33px] h-[33px] top-[414px] left-[646px] bg-white rounded-[5px] border-2 border-solid border-black' />
          <div className='absolute w-[33px] h-[33px] top-[413px] left-[871px] bg-white rounded-[5px] border-2 border-solid border-black' />
        </div>
      </div>
    </div>
  );
};

export default Viaje;
