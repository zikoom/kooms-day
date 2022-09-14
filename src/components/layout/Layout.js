import NavBar from "./NavBar";
import Hedaer from "./Header";
import Content from "./Content";

import '../../App.scss'

function Layout(){
  return (
    <div className="top-container">
      <Hedaer />
      <NavBar />
      <Content />
    </div>
  )
}

export default Layout;