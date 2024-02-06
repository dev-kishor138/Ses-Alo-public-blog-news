import newsImage2 from "../assets/news/news2.jpg";

const SmallNewsCard = () => {
    return (
        <div className="grid grid-cols-3 gap-5">
            <div className="">
                <img src={newsImage2} alt="" />
            </div>
            <div className="col-span-2">
                <div className="flex justify-between items-center mb-3 w-full text-sm">
                    <h5 className="text-primary-500">বিনোদন</h5>
                    <p className="text-xs">২৬ জানুয়ারী ২০২৪</p>
                </div>
                <h4 className="text-md hover:text-primary-500 transition-all">
                    ‘দ্য আর্চিজ’ অভিনেত্রী খুশিকে কতটা জানেন
                </h4>
            </div>
        </div>
    );
};

export default SmallNewsCard;