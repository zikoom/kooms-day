import Button55 from "components/button/Button55";
import { useSelector } from "react-redux";
import {loginGoogle} from "service/firebase";

const login = async () => {
  try {
    const res = await loginGoogle()
    console.log("res: ", res);
  } catch (error) {
    console.log('err: ', error);
  }
}

function Hedaer(){
  const {userinfo} = useSelector(state => state.firebaseManager);
  return (
    <header>
      <div className="header-flex-content logo"></div>
      <div className="header-flex-content login">
        {
          userinfo ?
          <h1>user info 가 있읍니다.</h1> :
          <Button55 clickEvent={login} text="login" />
        // <Button55 clickEvent={login} text="login" />
        }
      </div>
    </header>
  )
}

export default Hedaer;