import HomeMain from "./HomeMain/HomeMain";
import HomeSide from "./HomeSide/HomeSide";


const Home = () => {
    return (
        <div className="flex px-2 flex-col lg:flex-row lg:w-4/5 mx-auto py-10 gap-4 lg:px-0">
            <div className="lg:w-[80%]">
                <HomeMain />
            </div>
            <div className="lg:w-[20%]">
                <HomeSide />
            </div>
        </div>
    );
};

export default Home;