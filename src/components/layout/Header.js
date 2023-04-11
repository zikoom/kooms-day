import { SET_FIREBASE_USERINFO } from "action/firebase_actions";
import Button55 from "components/button/Button55";
import NamePlate from "components/NamePlate"

import { useDispatch, useSelector } from "react-redux";
import {loginGoogle} from "service/firebase";




function Hedaer(){

  const dispatch = useDispatch();

  const login = async () => {
    try {
      const res = await loginGoogle()
      console.log("res: ", res);
      dispatch(SET_FIREBASE_USERINFO(res.user));
    } catch (error) {
      console.log('err: ', error);
    }
  }


  const {userinfo} = useSelector(state => state.firebaseManager);

  return (
    <header>
      <div className="header-flex-content logo"></div>
      <div className="header-flex-content login">
        {
          userinfo ?
          <NamePlate name={userinfo.displayName}/>:
          <Button55 clickEvent={login} text="login" />
        // <Button55 clickEvent={login} text="login" />
        }
      </div>
    </header>
  )
}

export default Hedaer;