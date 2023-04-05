import { useSelector } from "react-redux";
import Login from "../LoginButton";
import LogoutButton from "../LogoutButton";


function Hedaer({toggleMobileMenu}){
  const hamburgurImgURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6q3r64OKSdNldzFVlA_ObmKvoVNBE0YLqdw&usqp=CAU'

  const userName = useSelector(state => state.userinfo.name)
  const isUserLogin = useSelector(state => state.userinfo.isUserLogin)

  return (
    <header className="header">

      {/* mobile header */}
      <div className="header-moblie">
        <img src={hamburgurImgURL} onClick={toggleMobileMenu} alt='hamburgur-button' />
        {
          isUserLogin
          ? <div>
              <h1>{userName}님 환영합니다 !!</h1>
              <LogoutButton />
            </div>
          : <Login />

        }

      </div>

      {/* PC header */}
      <div className="header-pc">
        {
          isUserLogin
          ? <div>
              <h1>{userName}님 환영합니다 !!</h1>
              <LogoutButton />
            </div>
          : <Login />

        }
      </div>

    </header>
  )
}

export default Hedaer;