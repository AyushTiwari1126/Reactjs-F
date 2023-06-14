import { Outlet , Link } from "react-router-dom";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import Footer from "../Components/Footer";
import BackToTop from "../Components/BackToTop";
function DashBoardLayout(){
    return(<>
        <Header user="Sumit" dashBoardName="WowCard Admin"/>
       <SideBar/>
   
    <Outlet/>

    <Footer/>
    <BackToTop/>
    </>)
}

export default DashBoardLayout;