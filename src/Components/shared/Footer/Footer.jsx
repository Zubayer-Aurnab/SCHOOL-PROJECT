import logo from "../../../assets/logo2.png"
import { FaPhoneVolume } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const Footer = () => {
    return (
        <>
            <div className="bg-[#314E52] text-[#F7F6E7] py-5 lg:py-10 flex">
                <div className=" lg:w-4/5 mx-auto flex flex-col lg:flex-row gap-10 lg:gap-20">
                    <div className="">
                        <div className="flex flex-col  items-center  ">
                            <img src={logo} alt="" className="rounded-full w-32 h-32" />
                            <h1 className="text-[#F7F6E7] text-xl font-semibold py-2 ">Khord Ailchara Secondary School</h1>
                            <h1 className="text-[#F7F6E7] text-base font-semibold">খোর্দ আইলচারা মাধ্যমিক বিদ্যালয়</h1>
                        </div>

                    </div>
                    <div className="flex-1  flex px-4 flex-col lg:flex-row gap-5 lg:gap-20">
                        <div>
                            <h1 className="text-xl  py-4">Phone</h1>
                            <div className="space-y-6 ">
                                <p className="flex items-center gap-2"><FaPhoneVolume />01309117766</p>
                                <p className="flex items-center gap-2"><FaPhoneVolume />01749634207</p>
                                <p className="flex items-center gap-2"><FaPhoneVolume />01710626914</p>
                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl  py-4">Email</h1>
                            <div className="space-y-6 ">
                                <p className="flex items-center gap-2"><MdAttachEmail />ka.highschool1967@gmail.com</p>

                            </div>
                        </div>
                        <div>
                            <h1 className="text-xl  py-4">Address</h1>
                            <div className="space-y-6 ">
                                <a
                                    href=" https://www.google.com/maps/place/Khorda+Ail+chara+secondary+School/@23.82156,89.050034,18z/data=!4m6!3m5!1s0x39febef0ebab3547:0x3eea5953bc48f408!8m2!3d23.8215595!4d89.0500343!16s%2Fg%2F11gfnhdwlf?hl=en&entry=ttu"
                                    className="flex items-center gap-2 hover:border-b-2"
                                    target="_blank"
                                >
                                    <FaLocationDot /> Vill: Khord Ailchara Union: Ailchara Upzilla: Kushtia Sadar Zilla: Kushtia
                                </a>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="bg-[#314E52] text-[#F7F6E7] py-2 flex border-t-2 justify-center  px-2">
                <h1 className="">© Copyright 2024 , All Rights Reserved, A product of <a className=" text-[#F2A154] font-medium  hover:underline" href="https://portfolio-6458b.web.app/" target="_blank">Zubayer Alam Aurnab</a></h1>
            </div>
        </>
    );
};

export default Footer;