
import newsImage from "../../../assets/news/news1.jpg";
import SmallNewsCard from "../../../components/SmallNewsCard";



const NewsLetter = () => {
    return (

        <div className="py-5">
            <div className="container mx-auto px-5 lg:px-10">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
                    <div className="col-span-2">
                        <div className="w-full overflow-hidden">
                            <img src={newsImage} className="hover:w-[110%] transition-all" alt="" />
                        </div>
                    </div>
                    <div className="grid gap-5">
                        <SmallNewsCard />
                        <SmallNewsCard />
                        <SmallNewsCard />
                        <SmallNewsCard />
                        <SmallNewsCard />
                    </div>
                </div>
            </div>
        </div>


    );
};

export default NewsLetter;