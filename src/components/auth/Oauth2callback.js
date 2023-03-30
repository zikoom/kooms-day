import { useSearchParams } from "react-router-dom"
// import axios from "axios";
/**
 *  query key:code 에 전달되는 authCode를 사용하여 유저 정보 요청하기
 */

// const requestUserInfo = () => {
//   return axios.get()
// }

export default function Oauth2callback(){
  const [ searchParams, setSearchParams ] = useSearchParams();
  let queryKeys = [];
  for(let entry of searchParams.entries())  {queryKeys.push(entry)}
  const authCode = searchParams.get('code');

  console.log('queryKeys: ', queryKeys);
  queryKeys.map(key => searchParams.delete(key[0]));
  setSearchParams(searchParams);

  console.log('authCode: ', authCode);

  return (
    <div>
      <h1>콜백 처리 페이지</h1>
    </div>
  )
}