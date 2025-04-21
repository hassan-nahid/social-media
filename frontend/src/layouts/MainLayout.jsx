import { Outlet } from "react-router"
import Navbar from "../components/Shared/Navbar"
import Footer from "../components/Shared/Footer"
import MobileNavbar from "../components/Shared/MobileNavbar"

const MainLayout = () => {
  return (
    <div>
        <div className="hidden sm:block lg:block xl:block 2xl:block">
            <Navbar/>
        </div>
        <Outlet/>
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