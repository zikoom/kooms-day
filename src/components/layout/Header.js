function Hedaer(){
  const testURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6q3r64OKSdNldzFVlA_ObmKvoVNBE0YLqdw&usqp=CAU'
  return (
    <header className="header">
      <img className="hamburgur" src={testURL} alt='haha' />
      <div>header</div>
    </header>
  )
}

export default Hedaer;