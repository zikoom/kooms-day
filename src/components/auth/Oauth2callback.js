import { useNavigate, useSearchParams } from "react-router-dom"
import _request from "../../api/api";
// import axios from "axios";
/**
 *  query key:code 에 전달되는 authCode를 사용하여 유저 정보 요청하기
 */

const requestUserInfo = (code) => {
  console.log('requestUserInfo in');
  return _request.post('/auth/userinfo', {
    authCode: code
  })
}

export default function Oauth2callback(){
  const [ searchParams, setSearchParams ] = useSearchParams();
  let queryKeys = [];
  for(let entry of searchParams.entries())  {queryKeys.push(entry)}
  const authCode = searchParams.get('code');

  queryKeys.map(key => searchParams.delete(key[0]));
  setSearchParams(searchParams);

  const navigate = useNavigate();

  (async function () {
    if(authCode) {
      try {
        const data = await requestUserInfo(authCode);
        console.log('data: ', data);

      } catch (error) {
        navigate('/');
      }
    }
  }())

  return (
    <div>
      <h1>콜백 처리 페이지</h1>
    </div>
  )
}