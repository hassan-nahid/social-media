import { Outlet } from "react-router"
import Navbar from "../components/Shared/Navbar"
import Footer from "../components/Shared/Footer"
import MobileNavbar from "../components/Shared/MobileNavbar"

const MainLayout = () => {
  return (
    <div className="h-screen">
        <div className="hidden sm:block lg:block xl:block 2xl:block">
            <Navbar/>
        </div>
        <div>
        <Outlet/>

        </div>
        {/* <div>
            <Footer/>
        </div> */}
        <div className="block md:hiddden ">
            <MobileNavbar/>
        </div>
    </div>
  )
}

export default MainLayout