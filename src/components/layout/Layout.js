import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

import '../../App.scss'

function Layout(){
  return (
    <div>
      <Header />
      <div className="main-content-wrapper">
        <div className="main-content-second-wrapper">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout;