import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import '../../App.scss'

function Layout(){
  return (
    <div className="top-container">
      <Header />
      <Outlet />
      {/* <div className="main-content-wrapper">
        <div className="main-content-second-wrapper">
        </div>
      </div> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Layout;