
import { useSelector } from "react-redux"

export default function Login () {

  const oauthInfo = useSelector(state => state.googleOauth);

  const requestGoogleLogin = () => {
    if(oauthInfo === null || oauthInfo === undefined) {
      throw new Error('oauthInfo is unvalid: ', oauthInfo);
    }

    const {auth_uri, client_id, scope, redirect_uri} = oauthInfo;
    const loginRequestURL = `${auth_uri}?scope=${scope}&response_type=token&redirect_uri=${redirect_uri}&client_id=${client_id}&state=${window.location.pathname}`
    console.log('loginRequestURL: ', loginRequestURL)
    window.location.href = loginRequestURL
  }


  return (
    <div>
      <button onClick={requestGoogleLogin}>로그인 해봅시다 !!</button>
    </div>
  )
}