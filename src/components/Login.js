
import { useState } from "react";
import { useSelector } from "react-redux"

export default function Login () {

  const oauthManager = useSelector(state => state.oauth.oauthManager);
  console.log("state:", oauthManager)

  const [googleID, setGoogleID] = useState('');
  const [googlePassword, setGooglePassword] = useState('');

  const googleIDChangeHandler = (e) => {
    const val = e.target.value;
    setGoogleID(val)
  }

  const googlePasswordChangeHandler = (e) => {
    const val = e.target.value;
    setGooglePassword(val);
  }

  const requestGoogleLogin = () => {
    if(oauthManager === null || oauthManager === undefined) {
      throw new Error('oauthManager is unvalid: ', oauthManager);
    }
    console.log('state in login button event: ', oauthManager);
  }


  return (
    <div>
      <h1>로그인 페이지 임다!</h1>
      <input placeholder="id" value={googleID} onChange={googleIDChangeHandler}></input>
      <input placeholder="password" value={googlePassword} onChange={googlePasswordChangeHandler}></input>
      <button onClick={requestGoogleLogin}>로그인 해봅시다 !!</button>
    </div>
  )
}