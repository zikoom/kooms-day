import Button55 from "components/button/Button55";

function Hedaer(){
  return (
    <header>
      <div className="header-flex-content logo"></div>
      <div className="header-flex-content login">
        <Button55 text="login" />
      </div>
    </header>
  )
}

export default Hedaer;