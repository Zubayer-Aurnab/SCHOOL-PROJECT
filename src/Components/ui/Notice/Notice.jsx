import niyog from '../../../assets/niyog.png'
import newspaper from '../../../assets/newspaper.png'
import pdf from '../../../assets/re.pdf'
const Notice = () => {
    return (
        <div className="bg-[#F7F6E7]">
            <div className=" lg:w-4/5 mx-auto ">
                <h1 className="text-2xl lg:text-3xl font-bold  text-gray-800 text-center my-8 underline">NOTICE </h1>
                {/* 1st notice */}
                <div className=' mb-10 lg:mb-20'>
                    <h1 className='text-center text-[15px] lg:text-xl text-blue-600 font-bold mb-4 lg:mb-8'>শিক্ষক/শিক্ষিকা/কর্মচারী নিয়োগ  দেওয়া হইবে.... ।২৬/০৩/২০২৪  হইতে  ০৯/০৪/২০০২৪</h1>
                    <div className='flex flex-col items-center justify-center '>
                        <img src={niyog} alt="" className='w-1/2 ' />
                        <a href={pdf} download='niyog biggopti' className='bg-[#314E52] text-[#F7F6E7] w-1/2 p-1 lg:p-2 rounded-xl mt-2 font-bold text-center'>    <button >Download</button></a>
                    </div>
                </div>

                {/* 2nd notice */}
                <div className=''>
                    <h1 className='text-center text-[15px] lg:text-xl text-blue-600 font-bold mb-4 lg:mb-8'>শিক্ষক/শিক্ষিকা/কর্মচারী নিয়োগ  দেওয়া হইবে.... ।২৬/০৩/২০২৪  হইতে  ০৯/০৪/২০০২৪</h1>
                    <div className='flex flex-col items-center justify-center mb-10 '>
                        <img src={newspaper} alt="" className='w-1/2' />
                        <a href={newspaper} download='niyog biggopti' className='bg-[#314E52] text-[#F7F6E7] w-1/2 p-1 lg:p-2 rounded-xl mt-2 font-bold text-center' >    <button >Download</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Notice;