import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo2.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [Open, setOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    const Dropdown = () => {
        setOpen(!Open);
    };
    const links = <>

        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#314E52] lg:text-xl  border-b-4 border-[#314E52] font-semibold " : "text-[#314E52] lg:text-xl hover:border-b-4 border-[#314E52] font-semibold"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#314E52] font-semibold lg:text-xl border-b-4 border-[#314E52] " : "text-[#314E52] font-semibold lg:text-xl hover:border-b-4 border-[#314E52] font-semibold "
            }
        >
            About
        </NavLink>
        <NavLink
            to="/notice"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#314E52] lg:text-xl border-b-4 border-[#314E52] font-semibold" : "text-[#314E52] lg:text-xl hover:border-b-4 border-[#314E52] font-semibold"
            }
        >
            Notice
        </NavLink>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#314E52] lg:text-xl   font-semibold" : "text-[#314E52] lg:text-xl hover:border-b-4 border-[#314E52] font-semibold"
            }
        >
            Admission
        </NavLink>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#314E52] lg:text-xl   font-semibold" : "text-[#314E52] lg:text-xl hover:border-b-4 border-[#314E52] font-semibold"
            }
        >
            Academy
        </NavLink>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#314E52] lg:text-xl   font-semibold" : "text-[#314E52] lg:text-xl hover:border-b-4 border-[#314E52] font-semibold"
            }
        >
            Administration
        </NavLink>
        <NavLink
            to="/"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#314E52] lg:text-xl  font-semibold" : "text-[#314E52] lg:text-xl hover:border-b-4 border-[#314E52] font-semibold"
            }
        >
            Gallery
        </NavLink>
        <div className="lg:relative pb-4 lg:pb">
            <p
                className=" text-[#314E52] lg:text-xl  font-semibold flex items-center gap-1 cursor-pointer"
                onClick={Dropdown}
            >
                Students Result
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#314E52] font-bold " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {Open ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    )}
                </svg>
            </p>
            {Open && (
                <div className="lg:absolute lg:z-10 right-0 mt-2 lg:w-48  bg-[#F2A154]  rounded-md shadow-lg border-2 border-[#314E52] ">
                    <a href="http://www.educationboardresults.gov.bd/" target="_blank" className="block px-4 py-2 text-[#314E52] font-semibold hover:bg-[#314E52] hover:text-white border-b border-[#314E52]">HSC Result</a>
                    <a href="http://www.educationboardresults.gov.bd/" target="_blank" className="block px-4 py-2 text-[#314E52] font-semibold hover:bg-[#314E52] hover:text-white">SSC Result</a>

                </div>
            )}
        </div>


    </>
    return (
        <div>
            {/* UPPER NAV */}
            <div className="h-42 bg-[#314E52]  ">
                <div className="flex justify-center items-center gap-8 lg:gap-20 py-4 px-2">
                    <div>
                        <img className="h-12 w-12   lg:h-28 lg:w-28 rounded-full " src={logo} alt="" />
                    </div>
                    <div
                        style={{
                            letterSpacing: "2px",
                        }}
                        className="text-center ">
                        <h1 className="text-[#F7F6E7] text-[12px] lg:text-3xl font-semibold py-1 lg:py-2 ">Khord Ailchara Secondary School</h1>
                        <h1 className="text-[#F7F6E7] text-[10px] lg:text-2xl font-semibold py-1 lg:pb-2">খোর্দ আইলচারা মাধ্যমিক বিদ্যালয়</h1>
                        <div className="flex justify-center gap-2 lg:gap-4">
                            <h1 className="text-[#F7F6E7] text-[8px] lg:text-base ">ইআইআইএন: ১১৭৭৬৬   </h1>
                            <h1 className="text-[#F7F6E7] text-[8px] lg:text-base flex justify-center items-center gap-1 lg:gap-2"><FaLocationDot />কুষ্টিয়া  </h1>
                        </div>
                    </div>
                </div>
            </div>
            {/* UPPER NAV */}


            {/* bottom nav */}
            <div className="bg-[#F2A154]  h-12  gap-10 justify-center py-2 hidden lg:flex">
                {links}
            </div>

            {/* For Mobile */}
            <div className="bg-[#F2A154]  block lg:hidden cursor-pointer">
                <div className="flex justify-between items-center p-2 " onClick={toggleDropdown}>
                    <span className="text-[#314E52] font-bold ">Menu</span>

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#314E52] font-bold " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        )}
                    </svg>
                </div>
                <div style={{ maxHeight: isOpen ? '100vh' : '0', overflow: 'hidden', transition: 'max-height 1s ease' }} className="flex flex-col gap-5 px-2 ">
                    {links}

                </div>
            </div>
            {/* bottom nav */}

        </div>
    );
};

export default NavBar;