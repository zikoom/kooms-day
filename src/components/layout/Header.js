import { SET_FIREBASE_USERINFO } from "action/firebase_actions";
import AccountSettingPopup from "components/AccountSettingPopup";
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
      sessionStorage.setItem('userinfo', JSON.stringify(res.user));
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
          <div style={{width: '100%', height: '100%'}}>
            <NamePlate name={userinfo.displayName}/>
            <AccountSettingPopup />
          </div> :

          <Button55 clickEvent={login} text="login" />
        // <Button55 clickEvent={login} text="login" />
        }
      </div>
    </header>
  )
}

export default Hedaer;