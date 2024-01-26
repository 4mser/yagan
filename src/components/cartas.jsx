
'use client'
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Cartas() {
  return (
   
    <main className='pt-3 left-0 w-full overflow-hidden px-4'>
        <p className='py-2 font-semibold'>Menús principales</p>
        <Swiper
        spaceBetween={10}
        slidesPerView={2.5}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        

        

        <SwiperSlide >
          <Link href={'/tragos'}>
            <div className='overflow-hidden  rounded-lg shadow-md border border-white/30  from-cyan-300 to-cyan-600'>
              <img src="https://app-valdi.s3.amazonaws.com/yagan/menus/tragos.png" alt="" className='w-full h-full object-cover rounded-md' />
            </div>
            <p className='text-xs font-extralight py-1 '>Tragos</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/sushi'}>
            <div className='overflow-hidden  rounded-lg shadow-md border border-white/30  from-red-600 to-red-800'>
              <img src="https://app-valdi.s3.amazonaws.com/yagan/menus/sushi.png" alt="" className='w-full h-full object-cover rounded-md' />
            </div>
            <p className='text-xs font-extralight py-1 '>Sushi</p>
          </Link>
        </SwiperSlide>

        <SwiperSlide >
          <Link href={'/carta'}>
            <div className='overflow-hidden rounded-lg  shadow-md  border border-white/30  from-yellow-300 to-green-200'>

              <img src="https://app-valdi.s3.amazonaws.com/yagan/menus/platos.png" alt="" className='w-full h-full object-cover rounded-md' />
            </div>
            <p className='text-xs font-extralight py-1 '>Platos</p>
          </Link>
        </SwiperSlide>

      </Swiper>
    </main>

);
}
