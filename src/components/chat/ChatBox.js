import { useState } from 'react';
import '../../assets/scss/components/ChatBox.scss'

export default function ChatBox (props) {

  const {isConnected, userinfo, sendMsg, msgs, scrollTagID} = props;
  const [text, setText] = useState('');
  const inputHandler = (e) => {setText(e.target.value)}
  const submit = (event) => {
    console.log('submit in');
    event.preventDefault();
    sendMsg(text, userinfo.displayName || null);
    setText('');
  }
  return (
    <div className='container' >
      {/* <h1>Swanky Chatbox UI With Angular</h1> */}
      <div className='chatbox' >
        <div className='chatbox__user-list'>
          <h1>User list</h1>
          {/* <div className='chatbox__user--active'>
            <p>Jack Thomson</p>
          </div>
          <div className='chatbox__user--busy'>
            <p>Angelina Jolie</p>
          </div>
          <div className='chatbox__user--active'>
            <p>George Clooney</p>
          </div>
          <div className='chatbox__user--active'>
            <p>Seth Rogen</p>
          </div>
          <div className='chatbox__user--away'>
            <p>John Lydon</p>
          </div> */}
        </div>
        <div className="chatbox__messages">
          <div id={scrollTagID} className="chatbox__messages__user-message">
            {/* 남의 메세지는 other class 추가 */}
            {/* <div className="chatbox__messages__user-message--ind-message other">
              <p className="name">name</p>
              <br/>
              <p className="message">msgmsg</p>
            </div>
            <div className="chatbox__messages__user-message--ind-message">
              <p className="name">name</p>
              <br/>
              <p className="message">msgmsg</p>
            </div> */}
            {
              msgs.map((msg, idx) => {
                const className = msg.type === 1 ? 'chatbox__messages__user-message--ind-message': 'chatbox__messages__user-message--ind-message other'
                return (

                <div className={className} key={idx}>
                  <p className="name">{msg.userName}</p>
                  <br/>
                  <p className="message">{msg.text}</p>
                </div>
              )})
            }
          </div>
        </div>
        <form onSubmit={submit}>
          <input type="text" value={text} onInput={inputHandler} placeholder={isConnected && userinfo ? "Enter your message" : "로그인 해주세요 !!"} disabled={isConnected && userinfo ? false : true}/>
        </form>
      </div>
    </div>
  )
}