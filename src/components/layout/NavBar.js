import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './NavBar.scss'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout} from '../../app/reducers/loginManager'

function NavBar(){
  const [userName, setUserName] = useState('');
  const [uid, setUid] = useState(null);
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  const loginState = useSelector((state) => state.loginManager.value);
  const dispatch = useDispatch();


  console.log("uid: ", uid);



  const initUid = (uid) => {
    setUid((cur) => !cur ? uid : cur);
  }

  const loginEvent = async () => {
    try{
      const loginResult = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(loginResult);
      const token = credential.accessToken;
      console.log('token: ', token);
      // The signed-in user info.
      const user = loginResult.user;
      setUserName(user.displayName);
      initUid(user.uid);
      console.log('user: ', user);
      dispatch(login());

    }catch(error){
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log('구글 로그인 에러. code, msg, email, credential: ', errorCode, errorMessage, email, credential);
    }
  }
  const logoutEvent = () => {
    dispatch(logout())
  }

  return (
    <nav className="nav">
      {
        loginState ?
        <div className="user-info">
          <div className="user-name">{userName} 님!</div>
          <div>화녕 합니다!!</div>
          <div>압도적 웰컴!!</div>
          <button onClick={logoutEvent}>로그아웃 하기</button>
        </div> :
        <div className="user-info">
          <button onClick={loginEvent}>구글 로그인 하기</button>
        </div>

      }
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/" >홈</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/webgl" >쿰.. 가고싶은대로 간다..</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/blog" >블로그를,, 해볼까?</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/guest-book" >나.. 왔다간다 !</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/zaduguaza/main" >만들어봅시다~</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/zaduguaza/clone2" >만들어봅시다~2</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/zaduguaza/props" >프롭스</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/zaduguaza/nico-hook" >니꼬의 리액트 훅 이야기</Link></div>
    </nav>
  )
}

export default NavBar;