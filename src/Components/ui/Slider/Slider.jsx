import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//importing images
import p1 from '../../../assets/p1.jpg';
import p2 from '../../../assets/p2.jpg';

import p5 from '../../../assets/p5.jpg';
import p6 from '../../../assets/p6.jpg';
import p3 from '../../../assets/p3.jpg';
import p8 from '../../../assets/p8.jpg';
import p9 from '../../../assets/p9.jpg';
import p10 from '../../../assets/p10.jpg';
import p11 from '../../../assets/p11.jpg';


const Slider = () => {
    return (
        <div className='w-full '>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={true}
                navigation={true}
                freeMode={true}
                modules={[FreeMode, Pagination, Autoplay, Pagination]}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    
                }}
                className="mySwiper pb-8 lg:pb-10"
            >
                <SwiperSlide>
                    <img src={p5} alt="" className='w-full lg:h-[70vh] lg:w-full object-contain lg:object-cover rounded-xl ' />
                </SwiperSlide>
                <SwiperSlide className="" >
                    <img src={p1} alt="" className=' w-full lg:h-[70vh] lg:w-full object-contain lg:object-cover rounded-xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p2} alt="" className=' w-full lg:h-[70vh] lg:w-full object-contain lg:object-cover rounded-xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p10} alt="" className=' w-full lg:h-[70vh] lg:w-full object-contain lg:object-cover rounded-xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p11} alt="" className=' w-full lg:h-[70vh] lg:w-full object-contain lg:object-cover rounded-xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p6} alt="" className=' w-full lg:h-[70vh] lg:w-full object-contain lg:object-cover rounded-xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p8} alt="" className=' w-full lg:h-[70vh] lg:w-full object-contain lg:object-cover rounded-xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p9} alt="" className=' w-full lg:h-[70vh] lg:w-full object-contain lg:object-cover rounded-xl' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p3} alt="" className=' w-full lg:h-[70vh] lg:w-full object-contain lg:object-cover rounded-xl' />
                </SwiperSlide>


            </Swiper>
        </div>
    );
};

export default Slider;