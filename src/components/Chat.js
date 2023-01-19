import config from '../config.json'
import io from 'socket.io-client'

import ".//../css/Chatbox.css"
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CHAT_ADD, CHAT_CLEAR, SET_CHAT_NICKNAME, SET_CHAT_ROOM_ID, SET_SOCKET_CONNECTION, SET_SOCKET_ID} from '../action/actions';
import ChatNickname from './chat/ChatNickname';
import ChatBox from './chat/ChatBox';

const PATH_TYPE = window.location.hostname === 'localhost' ? 'LOCAL' : 'DEV';
console.log('PATH_TYPE: ', PATH_TYPE);
const _SERVER_PATH = config[PATH_TYPE]['SOCKET_SERVER'];


let socket = null;

const Chat = () => {

  const _MY_COMMENT = 1;
  const _OTHER_COMMENT = 2;

  const dispatch = useDispatch();
  const isConnected = useSelector(state => state.socket.isConnected);
  const nickname = useSelector(state => state.socket.nickname);
  const roomID = useSelector(state => state.socket.roomID)
  const msgs = useSelector(state => state.socket.msgs)

  const set_nickname_req = (nickname) => {
    if(!nickname) {return;}
    socket.emit('set_nickname_request', nickname);
  }

  const enterRoom = (roomNumString) => {
    const roomNumber = Number(roomNumString);
    if(isNaN(roomNumber) || roomNumber <= 0){
      console.log(`not valid roomNumber:${roomNumber}`);
      alert("방번호가 잘못되얐어요 !! 0 보다 큰 정수를 입력해 주세요");
      return;
    }
    socket.emit('enter-room', roomNumber);
  }

  const addMsg = (type, {nickname, text}) => {
    if(!(type && text)) {console.log('type or text unvalid. return');}
      dispatch(CHAT_ADD({type, text, nickname}))
  }

  const sendMsg = (text, roomID) => {
    if(!(text && roomID)){return;}
    const sendMsgObj = {
      nickname: nickname,
      text: text,
      roomID: roomID
    }
    console.log('sendMsg in. msg: ', sendMsgObj);
    socket.emit('chat', sendMsgObj);
  }

  const scrollDown = (elementID) => {
    const element = document.getElementById(elementID);
    if(element){
      element.scrollTop = element.scrollHeight;
    }
  }

  useEffect(() => {
    socket = io(_SERVER_PATH, {
      reconnectionDelay: 1000,
      reconnection: true,
      reconnectionAttemps: 10,
      // transports: ['websocket'],
      agent: false,
      upgrade: false,
      rejectUnauthorized: false
    })

    socket.on('init', (msg) => {
      console.log('init in. :', msg);
      dispatch(SET_SOCKET_CONNECTION(true));
      dispatch(SET_SOCKET_ID(msg));
    })

    socket.on('enter-room-confirm', (msg) => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      console.log('enter-room-confirm. msg: ', msg);
      dispatch(SET_CHAT_ROOM_ID(msg));
      dispatch(CHAT_CLEAR())
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
      console.log('set_nickname_response: ', msg);
      dispatch(SET_CHAT_NICKNAME(msg));
    })

    return () => {socket.disconnect()}
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  //채팅 자동 스크롤
  useEffect(() => {
    scrollDown('chatbox-scroll-div');
  }, [msgs])

  if(isConnected && nickname){
    return <ChatBox nickname={nickname} enterRoom={enterRoom} roomID={roomID} msgs={msgs} sendMsg={sendMsg}  />
  }else{
    return <ChatNickname set_nickname_req={set_nickname_req} />
  }
}


export default Chat