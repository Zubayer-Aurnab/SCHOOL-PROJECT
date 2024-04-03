import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

//importing images
import p1 from '../../../assets/p1.jpg';
import p2 from '../../../assets/p2.jpg';
import p3 from '../../../assets/p3.jpg';
import p4 from '../../../assets/p4.jpg';
import p5 from '../../../assets/p5.jpg';


const Slider = () => {
    return (
        <div className='w-full'>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                
                freeMode={true}
                modules={[FreeMode, Pagination, Autoplay ]}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                <SwiperSlide className="" >
                    <img src={p1} alt="" className='h-[50vh] w-[90vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p2} alt="" className='h-[50vh] w-[90vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p3} alt="" className='h-[50vh] w-[90vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p4} alt="" className='h-[50vh] w-[90vh]' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={p5} alt="" className='h-[50vh] w-[90vh]' />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;