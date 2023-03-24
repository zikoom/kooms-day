import axios from 'axios';

const loginRequestURL = () => {
  return axios.get(process.env.REACT_APP_SERVER_PATH + '/auth/googleOauthURL')
}

export default function LoginButton () {

  const requestGoogleLogin = async () => {
    const res = await loginRequestURL();
    window.location.href = res.data.url;
    console.log('res: ', res);
  }

  return (
    <div>
      <button onClick={requestGoogleLogin}>로그인 해봅시다 !!</button>
    </div>
  )
}