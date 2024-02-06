import LatestNews from "./Section/LatestNews";
import NewsLetter from "./Section/NewsLetter";
import SlideBar from "./Section/SlideBar";


const Home = () => {
    return (
        <div>
            <SlideBar />
            <NewsLetter />
            <LatestNews />
        </div>
    );
};

export default Home;