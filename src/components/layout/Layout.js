import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftNavBar from "./LeftNavBar";
import Footer from "./Footer";

import '../../App.css'

function Layout(){
  return (
    <div>
      <Header />
      <LeftNavBar />
      <div className="main-content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout;