import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo2.png"

const NavBar = () => {
    return (
        <div>
            {/* UPPER NAV */}
            <div className="h-42 bg-[#314E52]  ">
                <div className="flex justify-center gap-10 py-4 px-2">
                    <div>
                        <img className="h-12 w-12   lg:h-28 lg:w-28 rounded-full " src={logo} alt="" />
                    </div>
                    <div
                        style={{
                            letterSpacing: "2px",
                        }}
                        className="text-center ">
                        <h1 className="text-[#F7F6E7] text-[12px] lg:text-3xl font-semibold py-2 ">Khord Ailchara Secondary School</h1>
                        <h1 className="text-[#F7F6E7] text-[10px] lg:text-2xl font-semibold">খোর্দ আইলচারা মাধ্যমিক বিদ্যালয়</h1>
                    </div>
                </div>
            </div>
            {/* UPPER NAV */}


            {/* bottom nav */}
            <div className="bg-[#F2A154]  h-12 flex gap-10 justify-center py-2">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#314E52] lg:text-xl  border-b-4 border-[#314E52] font-semibold " : "text-[#314E52] lg:text-xl hover:border-b-4 border-[#314E52] font-semibold"
                    }
                >
                    Home
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
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#314E52] font-semibold lg:text-xl border-b-4 border-[#314E52] " : "text-[#314E52] font-semibold lg:text-xl hover:border-b-4 border-[#314E52] font-semibold "
                    }
                >
                    About
                </NavLink>

            </div>
            {/* bottom nav */}

        </div>
    );
};

export default NavBar;