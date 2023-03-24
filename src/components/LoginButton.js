import axios from 'axios';

const loginRequestURL = () => {
  return axios.get(process.env.REACT_APP_SERVER_PATH + '/auth/googleOauthURL')
}

export default function LoginButton () {

  const requestGoogleLogin = async () => {
    try {
      const res = await loginRequestURL();
      window.location.href = res.data.url;

    } catch (error) {
      console.log('loginRequestURL err. ', error);
    }
  }

  return (
    <div>
      <button onClick={requestGoogleLogin}>로그인 해봅시다 !!</button>
    </div>
  )
}