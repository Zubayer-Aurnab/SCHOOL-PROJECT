import { Link } from "react-router-dom";
import niyog from "../../../../assets/niyog.png"

const HomeSide = () => {
    return (
        <div className="border-4 rounded-xl">
            <h1 className="text-2xl font-semibold underline text-center bg-[#E7E6E1] "> Notice Board</h1>
            <Link to={'/notice'}>
                <div className="mt-10 p-2 flex gap-3 bg-[#E7E6E1] m-2">
                    <img src={niyog} alt="" className="h-28" />
                    <p className='text-sm text-blue-600'>
                        শিক্ষক/শিক্ষিকা/কর্মচারী নিয়োগ  দেওয়া হইবে.... ।
                    </p>
                </div>
            </Link>
        </div>
    );
};

export default HomeSide;