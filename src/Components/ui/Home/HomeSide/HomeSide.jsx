import ImportantLinks from "../../ImportantLinks/ImportantLinks";
import Location from "../../Location/Location";
import NoticeBoard from "../../NoticeBoard/NoticeBoarrd";

const HomeSide = () => {
    return (
        <div className="">
            <div className=" ">
                <NoticeBoard />
                <ImportantLinks />
                <Location />
            </div>
        </div>
    );
};

export default HomeSide;