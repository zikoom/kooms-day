/* eslint-disable jsx-a11y/anchor-is-valid */
//개인 설정 팝업


import { SET_CHAT_USER_LOGOUT } from 'action/actions';
import { SET_FIREBASE_USERINFO } from 'action/firebase_actions';
import styles from 'assets/scss/components/AccountSettingPopup.module.scss'
import { useDispatch } from 'react-redux';


export default function AccountSettingPopup (props) {

  const dispatch = useDispatch();

  const {clickEventHandler = () => {}} = props;
  const logout = (event) => {
    dispatch(SET_FIREBASE_USERINFO(false));
    dispatch(SET_CHAT_USER_LOGOUT());
    sessionStorage.removeItem('userinfo');
    clickEventHandler(event);
  }
  return (
    <div className={styles.container}>
      {/* contents wrapper */}
      <div className={styles['content-container']}>
        <div className={styles['content']} onClick={logout}>
          <a className={styles['button']}>로그아웃</a>
        </div>
      </div>
    </div>
  )
}