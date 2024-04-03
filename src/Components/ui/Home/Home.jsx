import HomeMain from "./HomeMain/HomeMain";
import HomeSide from "./HomeSide/HomeSide";


const Home = () => {
    return (
        <div className="flex w-4/5 mx-auto py-10">
            <div className="w-[80%]">
                <HomeMain />
            </div>
            <div className="w-[20%]">
                <HomeSide />
            </div>
        </div>
    );
};

export default Home;