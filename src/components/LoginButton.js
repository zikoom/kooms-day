import _request from '../api/api';
import { useDispatch } from 'react-redux';
import { SET_LOADING_DISPLAY } from '../action/loading';

const loginRequestURL = () => {
  return _request.get('/auth/googleOauthURL')
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
      setTimeout(() => {
        dispatch(SET_LOADING_DISPLAY(false));
      }, 1500);
    }
  }

  return (
    <div>
      <button onClick={requestGoogleLogin}>로그인 해봅시다 !!</button>
    </div>
  )
}