import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftNavBar from "./LeftNavBar";

import '../../App.css'

function Layout(){
  return (
    <div>
      <Header />
      <LeftNavBar />
      <Outlet />
    </div>
  )
}

export default Layout;