import { useDispatch } from "react-redux"
import { USERINFO_SET_LOGOUT } from "../action/userinfo_actions";

export default function LogoutButton(){

  const dispatch = useDispatch();
  
  const logout = () => {
    dispatch(USERINFO_SET_LOGOUT())
  }


  return (
    <div>
      <button onClick={logout}>로그아웃 하기</button>
    </div>
  )
}