import Button55 from "components/button/Button55";
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
  return (
    <header>
      <div className="header-flex-content logo"></div>
      <div className="header-flex-content login">
        <Button55 clickEvent={login} text="login" />
      </div>
    </header>
  )
}

export default Hedaer;