import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

import '../../App.scss'

function Layout(){
  return (
    <div className="top-container">
      <NavBar />
      <Outlet />
    </div>
  )
}

export default Layout;