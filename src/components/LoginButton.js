import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SET_LOADING_DISPLAY } from '../action/loading';

const loginRequestURL = () => {
  return axios.get(process.env.REACT_APP_SERVER_PATH + '/auth/googleOauthURL')
}

export default function LoginButton () {

  const dispatch = useDispatch();

  const requestGoogleLogin = async () => {
    dispatch(SET_LOADING_DISPLAY(true));
    try {
      const res = await loginRequestURL();
      window.location.href = res.data.url;
    } catch (error) {
      console.log('loginRequestURL err. ', error);
    } finally{
      dispatch(SET_LOADING_DISPLAY(false));
    }
  }

  return (
    <div>
      <button onClick={requestGoogleLogin}>로그인 해봅시다 !!</button>
    </div>
  )
}