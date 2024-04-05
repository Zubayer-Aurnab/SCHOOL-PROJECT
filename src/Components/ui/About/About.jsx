import a1 from '../../../assets/Persons/a1.jpg'
import a2 from '../../../assets/Persons/a2.jpg'
import p3 from '../../../assets/p3.jpg'
import p6 from '../../../assets/p6.jpg'
import p7 from '../../../assets/p7.jpg'
import Slider from '../Slider/Slider';

const About = () => {
    return (
        <div className='px-4 lg:w-4/5 mx-auto'>
            <h1 className="text-2xl lg:text-3xl font-bold  text-gray-800 text-center my-8 underline">About </h1>
            {/* Principal And chairman section  */}
            <div className='flex flex-col lg:flex-row gap-8 lg:gap-0 justify-evenly'>
                <div className='border-4'>
                    <h1 className=' bg-[#E7E6E1] px-2'>প্রধান শিক্ষকঃ</h1>
                    <div className='p-8 text-center flex flex-col items-center'>
                        <img src={a2} alt="" className='w-60 rounded-full mb-2' />
                        <p>মোঃ মাসুদ আল মামুন</p>
                    </div>
                </div>
                <div className='border-4'>
                    <h1 className=' bg-[#E7E6E1] px-2'>সভাপতিঃ</h1>
                    <div className='p-8 text-center flex flex-col items-center'>
                        <img src={a1} alt="" className='w-60 rounded-full mb-2' />
                        <p>কামরুজ্জামান নাসির</p>
                        <p>Managing Director of  <br /><a className='text-blue-600 hover:underline ' target='_blank' href="https://knbgroup.com.bd/knb-agro-industries-ltd/">KNB AGRO INDUSTRIES LTD. </a></p>
                    </div>
                </div>

            </div>
            {/* about section  */}
            <div className='mt-14'>
                <div className='mb-10'>
                    <Slider />
                    <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 mt-4 lg:mt-8'>
                        <img src={p3} alt="" className='lg:h-1/3 lg:w-1/3 rounded-xl' />
                        <img src={p6} alt="" className='lg:h-1/3 lg:w-1/3 rounded-xl' />
                        <img src={p7} alt="" className='lg:w-1/4 rounded-xl' />
                    </div>
                </div>
                <div className='mb-10'>
                    <h1 className='text-2xl lg:text-3xl mb-2 font-semibold'>Khord Ail Chara Secondary School, Kushtia Sadar, Kushtia</h1>
                    <p
                        style={{
                            textAlign: "justify"
                        }}
                        className='text-lg'>Khord Ail Chara Secondary School is an academic institute and one of the popular institute located at Khoada Ail Chara, Kushtia Sadar, Kushtia. Its educational system is very good. Most of the students are very happy. Khord Ail Chara Secondary School`s Eiin number is 117766. This is one of the most famous institute in Kushtia Sadar, Kushtia. Every year a good number of students pass in examination with a brilliant result.</p>
                </div>
                <div className='mb-10'>
                    <h1 className='text-2xl lg:text-3xl mb-2 font-semibold'>Khord Ail Chara Secondary School EIIN CODE – 117766</h1>
                    <p
                        style={{
                            textAlign: "justify"
                        }}
                        className='text-lg'>এই শিক্ষা প্রতিষ্ঠান উচ্চ মানের শিক্ষা প্রদান করছে। এইখানে পড়ালেখা করলে আপনার বাচ্চারা ভালো জায়গায় পড়ালেখা করার সুযোগ পাবে।</p>
                </div>
                <div className='mb-10'>
                    <h1 className='text-2xl lg:text-3xl mb-2 font-semibold'>Khord Ail Chara Secondary School Phone Number – 01726033729</h1>
                    <ul className='text-lg'>
                        <li>• Institute Name – Khord Ail Chara Secondary School</li>
                        <li>• Village/Area – Khoada Ail Chara</li>
                        <li>• Thana – Kushtia Sadar</li>
                        <li>• District – Kushtia</li>
                        <li>• Country – Bangladesh</li>
                        <li>• Mobile – 01726033729</li>
                        <li>• EIIN Number – 117766</li>
                    </ul>
                </div>

                <div className="py-10">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.4791854575545!2d89.04939056983642!3d23.821559500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39febef0ebab3547%3A0x3eea5953bc48f408!2sKhorda%20Ail%20chara%20secondary%20School!5e0!3m2!1sen!2sbd!4v1712243877212!5m2!1sen!2sbd"
                        className="w-full h-[40vh] py-2"
                        width=""
                        height=""
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="eager"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>


            {/* about section  */}

        </div>
    );
};

export default About;