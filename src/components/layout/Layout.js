import { Outlet } from "react-router-dom";
import Header from "./Header";

import '../../App.scss'

function Layout(){
  return (
    <div className="top-container">
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout;