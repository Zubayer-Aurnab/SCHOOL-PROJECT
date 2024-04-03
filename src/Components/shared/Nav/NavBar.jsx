import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <div>
            {/* UPPER NAV */}
            <div className="h-42 bg-[#F2A154]  ">
                <div className="flex justify-center gap-10 py-4">
                    <div>
                        <img className="h-28 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/1636px-Oxford-University-Circlet.svg.png" alt="" />
                    </div>
                    <div className="text-center">
                        <h1 className="text-black text-3xl font-semibold py-2">Khord Ailchara Secondary Schoo</h1>
                        <h1 className="text-black text-2xl font-semibold">খোর্দ আইলচারা মাধ্যমিক বিদ্যালয়</h1>
                    </div>
                </div>
            </div>
            {/* UPPER NAV */}
            {/* bottom nav */}
            <div className="bg-[#314E52] h-12 flex gap-10 justify-center py-2">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white text-xl  border-b-4 border-[#F2A154] " : "text-white text-xl hover:border-b-4 border-[#F2A154]"
                    }
                >
                    Home
                </NavLink>
                <NavLink
                    to="/notice"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white text-xl border-b-4 border-[#F2A154]" : "text-white text-xl hover:border-b-4 border-[#F2A154] "
                    }
                >
                    Notice
                </NavLink>
                <NavLink
                    to="/recruitment"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-white text-xl border-b-4 border-[#F2A154]" : "text-white text-xl hover:border-b-4 border-[#F2A154] "
                    }
                >
                    Recruitment
                </NavLink>

            </div>
            {/* bottom nav */}

        </div>
    );
};

export default NavBar;