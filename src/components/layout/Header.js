import { Link } from "react-router-dom";

function Header() {
  return (
    <header >
      <div className="header-wrapper justify-center">
        <nav>
          <div className="header-nav-item inline-block text-left"><Link to="/" >홈</Link></div>
          <div className="header-nav-item inline-block text-left"><Link to="/webgl" >쿰.. 가고싶은대로 간다..</Link></div>
          <div className="header-nav-item inline-block text-left"><Link to="/guest-book" >나.. 왔다간다 !</Link></div>
        </nav>
      </div>
    </header>
  )
}

export default Header;