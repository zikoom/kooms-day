/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import loadOauthSecret from './js/oauth';
import { SET_GOOGLE_OAUTH_ACCESS_TOKEN } from './action/oauth_actions';
import { USERINFO_SET_LOGIN, USERINFO_SET_NAME } from './action/userinfo_actions';
import axios from 'axios';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /**
   *
   * @returns 유효한 토큰이 있으면 로그인 처리
   */
  const checkGooglOauthLogin = async () => {
    const queryParams = new URLSearchParams(window.location.hash)

    const accessToken = queryParams.get('access_token');
    //리다이렉트할 path. 사용자가 로그인에 접근한 라우트
    const navigatePath = queryParams.get('#state');


    if(accessToken && navigatePath){


      const userInfoGoogleAPIURL = 'https://www.googleapis.com/oauth2/v1/userinfo';
      const requestURL = userInfoGoogleAPIURL + `?access_token=${accessToken}`

      try{
        const result = await (await fetch(requestURL)).json();

        dispatch(SET_GOOGLE_OAUTH_ACCESS_TOKEN(accessToken))
        dispatch(USERINFO_SET_LOGIN(true))
        dispatch(USERINFO_SET_NAME(result.name))
        navigate(navigatePath);

      }catch(e){
        console.log(`err during get using google api:${userInfoGoogleAPIURL}. access_token:${accessToken}`)
      }

    }

  }

  useEffect(() => {
    loadOauthSecret(dispatch);
    checkGooglOauthLogin();
  })

  useEffect(() => {
    axios.get('http://localhost:3000/api/users').then((res) => {
      console.log('res: ', res);
    })
  }, [])


  return (
    <div className="App">
      <Layout />
    </div>
  );
}

export default App;
