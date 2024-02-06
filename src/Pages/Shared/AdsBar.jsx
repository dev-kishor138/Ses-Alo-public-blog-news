import bgImage from "../../assets/bg/bgimage.jpg"

const AdsBar = () => {
    return (
        <div className="py-5 bg-gray-50">
            <div className="container mx-auto">
                <div className="h-[100px] bg-no-repeat bg-cover bg-center w-[70%] mx-auto rounded-md relative overflow-hidden" style={{ backgroundImage: `url(${bgImage})` }}>
                    <div id="bgImage-overlay"></div>
                    <div className="absolute flex gap-10 items-center text-white h-full z-20">
                        <div className="border-r px-5">
                            <h3 className="text-2xl font-semibold">Brand Ambassador</h3>
                        </div>
                        <div className="max-w-[400px] px-5 border-r">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe esse numquam accusamus </p>
                        </div>
                        <div>
                            <h5 className="font-semibold text-lg">Ads</h5>
                            <span>showing area</span>                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdsBar;