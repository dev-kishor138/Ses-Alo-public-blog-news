import { Outlet } from "react-router-dom";
import NavBar from "../Pages/Shared/NavBar";
import Footer from "../Pages/Shared/Footer";
// import TopBar from "../Pages/Shared/Topbar";
import TopBar2 from "../Pages/Shared/TopBar2";
import AdsBar from "../Pages/Shared/AdsBar";


const Main = () => {
    return (
        <div>
            <TopBar2 />
            <NavBar></NavBar>
            <AdsBar></AdsBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;