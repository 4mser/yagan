
'use client'
import Link from 'next/link'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Anuncios() {
  return (
   
    <main className='pt-[120px] left-0 w-full overflow-hidden px-4'>
        <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        className="mySwiper"
      >
        

        <SwiperSlide >
          <Link href={'/carta'}>
            <div className='h-36 overflow-hidden rounded-lg  shadow-md  p-1.5 bg-white/15 '>

            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide >
          <Link href={'/tragos'}>
            <div className='h-36 overflow-hidden  rounded-lg shadow-md p-1.5 bg-white/15 '>
            </div>
          </Link>
        </SwiperSlide>

        <SwiperSlide>
          <Link href={'/sushi'}>
            <div className='h-36 overflow-hidden  rounded-lg shadow-md p-1.5 bg-white/15 '>
            </div>
          </Link>
        </SwiperSlide>

      </Swiper>
    </main>

);
}
