import { FaBars, FaSearch } from "react-icons/fa"
import { IoIosNotifications } from "react-icons/io"
import Logo from "../../assets/rater-alo.png";

const TopBar = () => {
    return (
        <div className="container mx-auto">
            <div className="flex justify-between items-center h-28">
                <div className="grid gap-5">
                    <div className="flex gap-10 items-center">
                        <span className="text-2xl cursor-pointer"><FaBars /></span>
                        <span className="text-2xl cursor-pointer"><FaSearch /></span>
                    </div>
                    <div>
                        <span>বৃহস্পতিবার, ০৭ সেপ্টেম্বর ২০২৩</span>
                    </div>
                </div>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className="grid gap-5 items-center">
                    <div className="flex justify-end gap-5 items-center">
                        <span className="text-2xl cursor-pointer"><IoIosNotifications /></span>
                        <button className="btn px-4 py-1 bg-transparent border hover:bg-slate-100 text-md font-medium text-[#0573e6]">Login</button>
                    </div>
                    <div className="flex justify-end gap-5">
                        <span className="text-md font-semibold hover:border-b border-[#000] cursor-pointer">English</span>
                        <span>Edition</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBar;