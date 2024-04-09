import { Link } from "react-router-dom";
import { MdSchool } from "react-icons/md";
import { IoBook } from "react-icons/io5";
const ImportantLinks = () => {
    return (
        <div className="mt-10">
            <div className="border-4 border-[#314E52] rounded-xl">
                <h1 className="text-2xl font-semibold  text-center bg-[#314E52] text-[#F7F6E7] pb-2 "> Important Links</h1>


                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://www.jessoreboard.gov.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "> <MdSchool className="text-black text-xl " /> যশোর,শিক্ষা বোর্ড </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://moedu.gov.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "> <IoBook className="text-black text-xl" /> শিক্ষা মন্ত্রণালয় </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://banbeis.gov.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "><IoBook className="text-black text-xl" /> ব্যানবেইস </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://dshe.gov.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "><MdSchool className="text-black text-xl" /> মাধ্যমিক ও উচ্চশিক্ষা অধিদপ্তর </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"http://emis.gov.bd/emis"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "><MdSchool className="text-black text-xl" /> DSHE-EMIS </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://www.dpe.gov.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "><MdSchool className="text-black text-xl" /> প্রাথমিক শিক্ষা অধিদপ্তর </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://www.teachers.gov.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "> <IoBook className="text-black text-xl" /> শিক্ষক বাতায়ন </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://muktopaath.gov.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "><MdSchool className="text-black text-xl" />মুক্তপাঠ </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://dgme.gov.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "> <IoBook className="text-black text-xl" /> এনসিটিবি </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://dgme.gov.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "> <IoBook className="text-black text-xl" />  ই-বুক </p>
                    </Link>
                </div>
                <div className="border-b border-[#314E52] p-4">
                    <Link to={"https://konnect.edu.bd/"} target="_blank">
                        <p className="text-blue-600 flex items-center gap-2 hover:underline "> <IoBook className="text-black text-xl" /> কিশোর বাতায়ন </p>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ImportantLinks;