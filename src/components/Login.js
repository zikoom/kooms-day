import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default function Login(){

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
      console.log('user: ', user);

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


  return (
    <div>
      <button onClick={login}>구글 로그인해보기</button>
    </div>
  )
}