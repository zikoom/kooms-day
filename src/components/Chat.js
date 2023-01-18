import config from '../config.json'
import io from 'socket.io-client'

import ".//../css/Chatbox.css"
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_CHAT_NICKNAME, SET_CHAT_ROOM_ID, SET_SOCKET_CONNECTION, SET_SOCKET_ID} from '../action/actions';
import ChatNickname from './chat/ChatNickname';
import ChatBox from './chat/ChatBox';

const PATH_TYPE = config['PATH_TYPE'];
const _SERVER_PATH = config[PATH_TYPE]['SOCKET_SERVER'];

console.log('cconfig: ', config);
console.log('PATH_TYPE: ', PATH_TYPE)
console.log('_SERVER_PATH: ', _SERVER_PATH);

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
  const roomID = useSelector(state => state.socket.roomID)
  const msgs = useSelector(state => state.socket.msgs)

  console.log('Chat render roomID: ', roomID);


  const set_nickname_req = (nickname) => {
    socket.emit('set_nickname_request', nickname);
  }

  const enterRoom = (roomNumString) => {
    const roomNumber = Number(roomNumString);
    socket.emit('enter-room', roomNumber);
  }

  const addMsg = (type, text) => {
    if(!(type && text)) {console.log('type or text unvalid. return');}
  }

  const sendMsg = (text, roomID) => {
    const sendMsgObj = {
      text: text,
      roomID: roomID
    }
    console.log('sendMsg in. msg: ', sendMsgObj);
    socket.emit('chat', sendMsgObj);
  }

  useEffect(() => {
    socket.on('init', (msg) => {
      dispatch(SET_SOCKET_CONNECTION(true));
      dispatch(SET_SOCKET_ID(msg));
    })

    socket.on('enter-room-confirm', (msg) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      console.log('enter-room-confirm. msg: ', msg);
      dispatch(SET_CHAT_ROOM_ID(msg));
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
      dispatch(SET_CHAT_NICKNAME(msg));
    })

    return () => {socket.disconnect()}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(isConnected && nickname){
    return <ChatBox nickname={nickname} enterRoom={enterRoom} roomID={roomID} msgs={msgs} sendMsg={sendMsg}  />
  }else{
    return <ChatNickname set_nickname_req={set_nickname_req} />
  }
}


export default Chat