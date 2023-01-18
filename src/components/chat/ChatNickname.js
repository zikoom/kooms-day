/**
 * Chat Intro page - 닉네임을 설정하는 페이지 입니다.
 */

import { useState } from "react";

const ChatNickname = ({set_nickname_req}) => {

  const [nicknameInput, setNicknameInput] = useState('');
  const onChangeNicknameInput = (e) => {const {value} = e.target; setNicknameInput(value)};

  return (
    <div>
      <h1>닉네임을 입력하세요!!</h1>
      <input value={nicknameInput} onChange={onChangeNicknameInput} />
      <button onClick={() => {set_nickname_req(nicknameInput); setNicknameInput('')}}>이걸로 할게요!!</button>
    </div>
  )
}



export default ChatNickname;