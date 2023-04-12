/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


import Layout from './components/layout/Layout';
import loadOauthSecret from './js/oauth';
import { SET_GOOGLE_OAUTH_ACCESS_TOKEN } from './action/oauth_actions';
import { USERINFO_SET_LOGIN, USERINFO_SET_NAME } from './action/userinfo_actions';
import Loading from './components/Loading';
import Overlay from './components/layout/Overlay';

import 'assets/scss/App.scss'
import { SET_FIREBASE_USERINFO } from 'action/firebase_actions';
import { SET_ACCOUNT_SETTING_POPUP_STATE } from 'action/popup_actions';
import AccountSettingPopup from 'components/AccountSettingPopup';

function App() {

  const dispatch = useDispatch();
  const navigate = useNavigate();


  //session에 저장되어있는 firebase auth 정보
  const userinfo = JSON.parse(sessionStorage.getItem('userinfo'));
    if(userinfo) {
    dispatch(SET_FIREBASE_USERINFO(userinfo));
  }


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

  const isDisplay = useSelector(state => state.loadingManager.isDisplay)
  const {showAccountSettingPopup} = useSelector(state => state.popupManager);
  const togleAccountSettingPopup = (event) => {event.stopPropagation(); if(showAccountSettingPopup) {dispatch(SET_ACCOUNT_SETTING_POPUP_STATE(!showAccountSettingPopup)) } }

  const AppClickEventHandler = (event) => {
    togleAccountSettingPopup(event);
  }

  return (
    <div className="App">
      {isDisplay ? <Loading /> : null}
      <Overlay />
      <div onClick={AppClickEventHandler} style={{width: '100%', height: '100%'}}>
        <Layout />
      </div>
      {showAccountSettingPopup ? <AccountSettingPopup clickEventHandler={togleAccountSettingPopup} /> : null }

    </div>
  );
}

export default App;
