import { CiGlobe, CiSearch, CiUser } from "react-icons/ci";
import { FaBars, FaNewspaper } from "react-icons/fa";
const menu = [
    {
        title: "সর্বশেষ",
        link: ""
    },
    {
        title: "রাজনীত",
        link: ""
    },
    {
        title: "বাংলাদেশ",
        link: ""
    },
    {
        title: "অপরাধ",
        link: ""
    },
    {
        title: "বিশ্ব",
        link: ""
    },
    {
        title: "বাণিজ্য",
        link: ""
    },
    {
        title: "খেলা",
        link: ""
    },
    {
        title: "বিনোদন",
        link: ""
    },
    {
        title: "চাকরি",
        link: ""
    },

]

const extraMenu = [
    {
        title: "খুজুন",
        link: "#",
        icon: <CiSearch />
    },
    {
        title: "ই-পেপার",
        link: "#",
        icon: <FaNewspaper />
    },
    {
        title: "English",
        link: "#",
        icon: <CiGlobe />
    },
    {
        title: "Login",
        link: "#",
        icon: <CiUser />
    }
]

const NavBar = () => {
    return (
        <div className="sticky top-0 border z-30 h-16 bg-[#fff] shadow-sm py-2">
            <div className="container mx-auto">
                <div className="h-full">
                    <div className="flex gap-5 items-center h-full justify-between">
                        <ul className="h-full flex justify-start gap-5 items-center mt-2">
                            {
                                menu.map((item, index) => <li className="font-bold" key={index}>{item.title}</li>)
                            }
                        </ul>
                        <ul className="flex gap-2 items-center h-full">
                            {
                                extraMenu.map((item, index) => <li key={index} className="px-5 border-l">
                                    <a href={item.link} className="flex justify-center items-center h-full gap-2">
                                        <span className="text-2xl">{item.icon}</span>
                                        {item.title}
                                    </a>
                                </li>)
                            }
                            <li className="px-5 border-x">
                                <a href="#" className="text-2xl">
                                    <span><FaBars /></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;