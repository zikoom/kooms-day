/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import loadOauthSecret from './js/oauth';
import { SET_GOOGLE_OAUTH_ACCESS_TOKEN } from './action/oauth_actions';

function App() {

  const dispatch = useDispatch();

  /**
   *
   * @returns 유효한 토큰이 있으면 true -> login 처리 or false
   */
  const checkGooglOauthLogin = async () => {
    const queryParams = new URLSearchParams(window.location.hash)

    const accessToken = queryParams.get('access_token');
    //리다이렉트할 path. 사용자가 로그인에 접근한 라우트
    const navigatePath = queryParams.get('#state');
    console.log('accessToken, navigatePath: ', accessToken, navigatePath)


    if(accessToken && navigatePath){
      dispatch(SET_GOOGLE_OAUTH_ACCESS_TOKEN(accessToken))
      const userInfoGoogleAPIURL = 'https://www.googleapis.com/oauth2/v1/userinfo';
      const requestURL = userInfoGoogleAPIURL + `?access_token=${accessToken}`
      const result = await (await fetch(requestURL)).json();
      console.log('result: ', result);
    }else{

    }

  }

  useEffect(() => {
    loadOauthSecret(dispatch);
    checkGooglOauthLogin();
  })



  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
