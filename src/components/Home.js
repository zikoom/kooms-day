import { useState } from "react";
import CommonPopup from "./Popup/CommonPopup";

function Home(){
  const [showPopup, setShowPopup] = useState(false);
  const toggle = () => {setShowPopup(cur => !cur)}
  return (
    <div>
      <h1>Home!</h1>
      <button onClick={toggle}>테스트 토글</button>
      <CommonPopup isOpen={showPopup} close={()=>{setShowPopup(false)}} />
    </div>
  )
}

export default Home;