
import Logo from "../../assets/rater-alo.png";
import TopBarData from "../../data/topBarData";





const TopBar2 = () => {
    return (
        <div className="container mx-auto">
            <div className="flex gap-10 items-center h-28">
                <div className="grid gap-5">
                    {/* <div className="flex gap-10 items-center">
                        <span className="text-2xl cursor-pointer"><FaBars /></span>
                        <span className="text-2xl cursor-pointer"><FaSearch /></span>
                    </div>
                    <div>
                        <span>বৃহস্পতিবার, ০৭ সেপ্টেম্বর ২০২৩</span>
                    </div> */}
                    <img className="h-[100px] object-contain" src={Logo} alt="" />
                </div>
                <div>
                    <ul className="flex items-center">
                        {/* <li className="px-5 mr-4 border-r-2">
                            <a className="flex gap-5 items-center" href="#">
                                <img src={topImage1} alt="" />
                                <h3 className="flex gap-2 font-semibold text-sm"><span className="text-red-600"><FaCamera /></span> প্রথম ছবি থেকে বাদ পড়েছিলেন এ অভিনেতা</h3>
                            </a>
                        </li> */}
                        {
                            TopBarData.map(data => <li key={data.id} className="px-5 mr-4 border-r-2">
                                <a className="flex gap-5 items-center" href="#">
                                    <img src={data.img} alt="images" />
                                    <h3 className="flex gap-2 font-semibold text-sm"><span className="text-red-600">{<data.icon />}</span> {data.title}</h3>
                                </a>
                            </li>)
                        }
                    </ul>
                </div>
                {/* <div className="grid gap-5 items-center">
                    <div className="flex justify-end gap-5 items-center">
                        <span className="text-2xl cursor-pointer"><IoIosNotifications /></span>
                        <button className="btn px-4 py-1 bg-transparent border hover:bg-slate-100 text-md font-medium text-[#0573e6]">Login</button>
                    </div>
                    <div className="flex justify-end gap-5">
                        <span className="text-md font-semibold hover:border-b border-[#000] cursor-pointer">English</span>
                        <span>Edition</span>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default TopBar2;