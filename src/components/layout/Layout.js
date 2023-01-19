import NavBar from "./NavBar";
import Hedaer from "./Header";
import Content from "./Content";

import '../../App.scss'
import { useState } from "react";

function Layout(){

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {setShowMobileMenu(cur => !cur)}

  return (
    <div className="top-container">
      <Hedaer toggleMobileMenu={toggleMobileMenu} />
      <NavBar showMobileMenu={showMobileMenu} />
      <Content />
    </div>
  )
}

export default Layout;