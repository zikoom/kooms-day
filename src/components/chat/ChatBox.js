import { useState } from "react";
import MyComment from "./MyComment";
import OtherComment from "./OtherComment";

//센드 메세지 보내기 버튼 SVG 컴포넌트
const SendMsgSVG = (props) => (
  <svg
    style={{
      width: 24,
      height: 24,
    }}
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="rgba(0,0,0,.38)"
      d="M17,12L12,17V14H8V10H12V7L17,12M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5M12,4.15L5,8.09V15.91L12,19.85L19,15.91V8.09L12,4.15Z"
    />
  </svg>
);


const ChatBox = ({nickname, enterRoom, roomID, msgs, sendMsg}) => {
  console.log('ChatBox render. roomdID: ', roomID);

  const _MY_COMMENT = 1;
  const _OTHER_COMMENT = 2;

  const [roomInput, setRoomInput] = useState('');
  const [msgInput, setMsgInput] = useState('');

  const onChangeRoomInput = (e) => {const {value} = e.target; setRoomInput(value)}
  const onMsgInputChange = (e) => {const {value} = e.target; setMsgInput(value)}
  return (
    <div className="chatbox-container">
      <div className="chatbox-room">
        <h2>{nickname} 님 환영함니다 !!</h2>
        <input value={roomInput} onChange={onChangeRoomInput} />
        <button onClick={()=>{enterRoom(roomInput); setRoomInput('')}}>입장</button>
        <h2>room Number: {roomID}</h2>
      </div>
      <section className="chatbox">
        <section className="chat-window">
          {
            msgs.map((msg, idx) => {
              if(msg.type === _MY_COMMENT){
                return <MyComment text={msg.text} key={idx} />
              }else if(msg.type === _OTHER_COMMENT){
                return <OtherComment text={msg.text} key={idx} />
              }
            })
          }

        </section>

        <form className="chat-input" onSubmit={ (e) => {e.preventDefault()}} >
          <input type="text" autoComplete="on" value={msgInput} onChange={onMsgInputChange} placeholder="Type a message" />
          <button onClick={() => {sendMsg(msgInput, roomID); setMsgInput('')}}>
              <SendMsgSVG />
          </button>
        </form>
      </section>
    </div>
  )
}

export default ChatBox