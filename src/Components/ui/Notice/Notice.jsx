// import mic from '../../../assets/Mic.jpg'
import niyog from '../../../assets/niyog.png'
import newspaper from '../../../assets/newspaper.png'
import pdf from '../../../assets/নিয়োগ বিজ্ঞপ্তি-2024.pdf'
const Notice = () => {
    return (
        <div className="bg-[#F7F6E7]">
            <div className=" lg:w-4/5 mx-auto ">
                <h1 className="text-2xl lg:text-3xl font-bold  text-gray-800 text-center my-8 underline">NOTICE </h1>
                <div className='flex flex-col items-center justify-center mb-10 '>
                    <img src={niyog} alt="" className='w-1/2 ' />
                    <button className='bg-[#314E52] text-[#F7F6E7] w-1/2 p-1 lg:p-2 rounded-xl mt-2 font-bold'><a href={pdf} download='niyog biggopti'>Download</a></button>
                </div>
                <div className='flex flex-col items-center justify-center mb-10 '>
                    <img src={newspaper} alt="" className='w-1/2' />
                    <button className='bg-[#314E52] text-[#F7F6E7] w-1/2 p-1 lg:p-2 rounded-xl mt-2 font-bold'><a href={newspaper} download='niyog biggopti'>Download</a></button>
                </div>
            </div>
        </div>
    );
};

export default Notice;