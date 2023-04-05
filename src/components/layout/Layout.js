// import NavBar from "./NavBar";
import Hedaer from "./Header";
import Content from "./Content";

import '../../scss/App.scss'
import { useState } from "react";

function Layout(){

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const toggleMobileMenu = () => {setShowMobileMenu(cur => !cur)}

  console.log(showMobileMenu);

  return (
    <div className="top-container">
      <Hedaer toggleMobileMenu={toggleMobileMenu} />
      {/* <NavBar showMobileMenu={showMobileMenu} /> */}
      <Content />
    </div>
  )
}

export default Layout;