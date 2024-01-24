
'use client'
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Cartas() {
  return (
   
    <main className='absolute top-28 left-0 w-full overflow-hidden px-3'>
        <p className='py-2 px-1'>Menús principales</p>
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
        

        <SwiperSlide>
          <Link href={'/carta'}>
            <div className='overflow-hidden rounded-lg  shadow-md  p-1.5 bg-white/20'>

              <img src="https://app-valdi.s3.amazonaws.com/menus_Mesa+de+trabajo+1.png" alt="" className='w-full h-full object-cover rounded-md' />
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/tragos'}>
            <div className='overflow-hidden  rounded-lg shadow-md p-1.5 bg-white/20'>
              <img src="https://app-valdi.s3.amazonaws.com/menus_Mesa+de+trabajo+1+copia.png" alt="" className='w-full h-full object-cover rounded-md' />
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/sushi'}>
            <div className='overflow-hidden  rounded-lg shadow-md p-1.5 bg-white/20'>
              <img src="https://app-valdi.s3.amazonaws.com/menuSushi-03.png" alt="" className='w-full h-full object-cover rounded-md' />
            </div>
          </Link>
        </SwiperSlide>

      </Swiper>
    </main>

);
}
