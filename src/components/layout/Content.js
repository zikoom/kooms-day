import Chat from '../Chat'

function Content(){
  return (
    <main>
      {/* <Outlet /> */}
      {/* <div className='content'> 하나 </div>
      <div className='content'> 둘 </div>
      <div className='content'> 셋 </div>
      <div className='content'> 넷 </div> */}
      <div className='content'>
        <Chat />
      </div>
      <div className='content'></div>
    </main>
  )
}

export default Content;