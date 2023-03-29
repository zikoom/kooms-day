import { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_LOADING_DISPLAY } from "../action/loading";
import CommonPopup from "./Popup/CommonPopup";

function Home(){
  const [showPopup, setShowPopup] = useState(false);
  const disaptch = useDispatch();
  const toggle = () => {setShowPopup(cur => !cur)}
  const toogleLoding = () => {
    disaptch(SET_LOADING_DISPLAY(true));
    setTimeout(() => {
      disaptch(SET_LOADING_DISPLAY(false));
    }, 1500);
  }
  return (
    <div>
      <h1>Home!</h1>
      <button onClick={toggle}>테스트 토글</button>
      <button onClick={toogleLoding}>테스트 토글 - 스피너</button>
      <CommonPopup isOpen={showPopup} close={()=>{setShowPopup(false)}} />
    </div>
  )
}

export default Home;