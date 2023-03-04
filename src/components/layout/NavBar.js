import { Link } from "react-router-dom";
import './NavBar.scss'
// import { login, logout} from '../../app/reducers/loginManager'

function NavBar({showMobileMenu}){
  return (
    <nav className={"nav" + (showMobileMenu ? ' on' : '')}>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/" >홈</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/login" >로그인</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/webgl" >쿰.. 가고싶은대로 간다..</Link></div>
      <div className="nav-flex-child"><Link className="nav-flex-child-link" to="/chat" >chat</Link></div>
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