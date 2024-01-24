
'use client'
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Cartas() {
  return (
   
    <main className='absolute top-40 left-0 w-full overflow-hidden'>
        <Swiper
        spaceBetween={0}
        slidesPerView={3}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        <SwiperSlide>
            <Link href={'/sushi'} >
                <div className='h-fit overflow-hidden px-3 rounded-3xl shadow-md'>

                <img src="https://app-valdi.s3.amazonaws.com/carta.png" alt="" className='w-full h-full object-cover' />
                </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link href={'/tragos'} >
            <div className='h-fit overflow-hidden px-3 rounded-3xl shadow-md'>

            <img src="https://app-valdi.s3.amazonaws.com/carta.png" alt="" className='w-full h-full object-cover' />
            </div>
            </Link>
        </SwiperSlide>

        <SwiperSlide>
            <Link href={'/carta'} >
            <div className='h-fit overflow-hidden px-3 rounded-3xl shadow-md'>

            <img src="https://app-valdi.s3.amazonaws.com/carta.png" alt="" className='w-full h-full object-cover' />
            </div>
            </Link>
        </SwiperSlide>

      </Swiper>
    </main>
    
  );
}
