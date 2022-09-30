import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './NavBar.scss'
import { useState } from "react";

function NavBar(){
  const [isLogined, setIsLogined] = useState(false);
  const [userName, setUserName] = useState('');
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  const login = async () => {
    try{
      const loginResult = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(loginResult);
      const token = credential.accessToken;
      console.log('token: ', token);
      // The signed-in user info.
      const user = loginResult.user;
      setUserName(user.displayName);
      console.log('user: ', user);
      setIsLogined(true);

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
  const logout = () => {
    setIsLogined(false);
  }
  return (
    <nav className="nav">
      {
        isLogined ?
        <div className="user-info">
          <div className="user-name">{userName} 님!</div>
          <div>화녕 합니다!!</div>
          <div>압도적 웰컴!!</div>
          <button onClick={logout}>로그아웃 하기</button>
        </div> :
        <div className="user-info">
          <button onClick={login}>구글 로그인 하기</button>
        </div>

      }
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/" >홈</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/login" >로그인</Link></div>
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