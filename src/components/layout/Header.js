function Hedaer({toggleMobileMenu}){
  const testURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6q3r64OKSdNldzFVlA_ObmKvoVNBE0YLqdw&usqp=CAU'
  return (
    <header className="header">

      {/* mobile header */}
      <div className="header-moblie">
        <img className="hamburgur" src={testURL} onClick={toggleMobileMenu} alt='haha' />

      </div>

      {/* PC header */}
      <div className="header-pc">

      </div>

      <div>header</div>
    </header>
  )
}

export default Hedaer;