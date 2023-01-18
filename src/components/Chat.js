import config from '../config.json'
import io from 'socket.io-client'

import ".//../css/Chatbox.css"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SOCKET_CONNECTION, SET_SOCKET_ID, SET_SOCKET_NICKNAME } from '../action/actions';
import ChatNickname from './chat/ChatNickname';

const PATH_TYPE = config['PATH_TYPE'];
const _SERVER_PATH = config[PATH_TYPE]['SOCKET_SERVER'];

console.log('cconfig: ', config);
console.log('PATH_TYPE: ', PATH_TYPE)
console.log('_SERVER_PATH: ', _SERVER_PATH);


//내가 한 말
const MyComment = ({text}) => {
  return (
    <article className="msg-container msg-self" id="msg-0">
      <div className="msg-box">
        <img className="user-img" id="user-0" alt="사용자 이미지" src="//gravatar.com/avatar/00034587632094500000000000000000?d=retro" />
        <div className="flr">
          <div className="messages">
            <p className="msg" id="msg-0">
              {text}
            </p>
          </div>
          <span className="timestamp"><span className="username">Name</span>&bull;<span className="posttime">3 minutes ago</span></span>
        </div>
      </div>
    </article>
  )
}
//남이 한 말
const OtherComment = ({text}) => {
  return (
    <article className="msg-container msg-remote" id="msg-0">
      <div className="msg-box">
        <div className="flr">
          <div className="messages">
            <p className="msg" id="msg-1">
              {text}
            </p>
          </div>
          <span className="timestamp"><span className="username">Name</span>&bull;<span className="posttime">2 minutes ago</span></span>
        </div>
        <img className="user-img" id="user-0" alt="사용자 이미지" src="//gravatar.com/avatar/56234674574535734573000000000001?d=retro" />
      </div>
    </article>
  )
}
//센드 메세지 SVG 컴포넌트
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

const handleSubmit = e => {
  e.preventDefault();
}

const socket = io(_SERVER_PATH, {
  reconnectionDelay: 1000,
  reconnection: true,
  reconnectionAttemps: 10,
  // transports: ['websocket'],
  agent: false,
  upgrade: false,
  rejectUnauthorized: false
})

const Chat = () => {

  const _MY_COMMENT = 1;
  const _OTHER_COMMENT = 2;

  const dispatch = useDispatch();
  const isConnected = useSelector(state => state.socket.isConnected);
  const nickname = useSelector(state => state.socket.nickname);

  const [msgContainer, setMsgContainer] = useState([]);
  const [msgInput, setMsgInput] = useState('');

  const [roomInput, setRoomInput] = useState('');
  const [roomID, setRoomID] = useState('');


  const set_nickname_req = (nickname) => {
    socket.emit('set_nickname_request', nickname);
  }

  const onMsgInputChange = (e) => {const {value} = e.target ;setMsgInput(value)}
  const onChangeRoomInput = (e) => {const {value} = e.target; setRoomInput(value)}

  const enterRoom = (roomNumString) => {
    const roomNumber = Number(roomNumString);
    socket.emit('enter-room', roomNumber);
    setRoomInput('');
  }

  const addMsg = (type, text) => {
    if(!(type && text)) {console.log('type or text unvalid. return');}
    setMsgContainer(cur => [...cur, {type, text}])
  }

  const sendMsg = () => {
    const sendMsgObj = {
      text: msgInput,
      roomID: roomID
    }
    console.log('sendMsg in. msg: ', sendMsgObj);
    socket.emit('chat', sendMsgObj);
    setMsgInput('');
  }

  useEffect(() => {
    socket.on('init', (msg) => {
      dispatch(SET_SOCKET_CONNECTION(true));
      dispatch(SET_SOCKET_ID(msg));
      console.log('isConnected: ', isConnected);
    })

    socket.on('enter-room-confirm', (msg) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      setRoomID(msg);
      console.log('RoomID: ', roomID);
    })

    socket.on('chat_response', (msg) => {
      console.log('chat_success recv. msg: ', msg);
      addMsg(_MY_COMMENT, msg);
    })
    socket.on('other_msg', (msg) => {
      console.log('other_msg recv. msg: ', msg);
      addMsg(_OTHER_COMMENT, msg);
    })

    socket.on('set_nickname_response', (msg) => {
      dispatch(SET_SOCKET_NICKNAME(msg));
    })

    return () => {socket.disconnect()}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const ChatBox = () => {
    return (
      <div className="chatbox-container">
        <div className="chatbox-room">
          <h2>{nickname} 님 환영함니다 !!</h2>
          <input value={roomInput} onChange={onChangeRoomInput} />
          <button onClick={()=>{enterRoom(roomInput)}}>입장</button>
          <h2>room Number: {roomID}</h2>
        </div>
        <section className="chatbox">
          <section className="chat-window">
            {
              msgContainer.map((msg, idx) => {
                if(msg.type === _MY_COMMENT){
                  return <MyComment text={msg.text} key={idx} />
                }else if(msg.type === _OTHER_COMMENT){
                  return <OtherComment text={msg.text} key={idx} />
                }else{
                  return <div>None</div>
                }
              })
            }

          </section>

          <form className="chat-input" onSubmit={handleSubmit}>
            <input type="text" autoComplete="on" value={msgInput} onChange={onMsgInputChange} placeholder="Type a message" />
            <button onClick={sendMsg}>
                <SendMsgSVG />
            </button>
          </form>
        </section>
      </div>
    )
  }

  if(isConnected && nickname){
    return <ChatBox />
  }else{
    return <ChatNickname set_nickname_req={set_nickname_req} />
  }
}


export default Chat