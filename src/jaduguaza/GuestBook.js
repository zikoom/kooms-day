import './GuestBook.scss'

import { db } from "../js/firebase"
import {ref, set} from "firebase/database"
import { useState } from 'react'
import { useSelector } from 'react-redux'

export default function GuestBook(){
  const boardPublicCheckBoxID = 'public-checkbox'
  const [fakeName, setFakeName] = useState('');
  const [boardPassword, setBoardPassword] = useState('');
  const [boardContent, setBoardContent] = useState('');
  const [isPrivateBoard, setIsPrivateBoard] = useState(false)

  /**
   * firebase 고유 ID
   */
  const userID = useSelector((state) => state.loginManager.userID) || null;

  const onFakeNameChange = (e) => {
    setFakeName(e.target.value);
  }

  const onBoardContentChange = (e) => {
    setBoardContent(e.target.value);
  }

  const onBoardPasswordChange = (e) => {
    setBoardPassword(e.target.value);
  }

  const onIsPrivateBoardChange = () => {
    setIsPrivateBoard((cur) => !cur);
  }

  const addNewBoard = async (fakeName, boardPassword, content, isPrivateBoard, uniqueID = null) => {
    console.log('addNewBoard in.');
    console.log("params: ", fakeName, boardPassword, content, isPrivateBoard, uniqueID);

    try{
      await set(ref(db, 'boards/test'), {
        name: 'test',
        content: 'test'
      })
      alert("저장 성공!!");
    }catch(err){
      console.log('err in addNewBoard. err: ', err);
    }


  }


  return (
    <div className="guset-book">
      <div className="title-wrapper"> 방명록을 남겨보아요~</div>
      <div className="editor-wrapper">
        <input type="checkbox" name="" id={boardPublicCheckBoxID} value={isPrivateBoard} onClick={onIsPrivateBoardChange}/>
        <label htmlFor={boardPublicCheckBoxID}>비공개</label>
        <div className="user-info-wrapper">
          <div className="user-name-wrapper">
            <div className="user-name-icon"></div>
            <div className="user-name-input-wrapper">
              <input type="text" placeholder="이름을 입력하세요" value={fakeName} onChange={onFakeNameChange}/>
            </div>
          </div>
          <div className="user-password-info">
            <div className="user-password-icon">

            </div>
            <div className="user-password-input-wrapper">
              <input type="text" placeholder="비밀번호를 입력하세요" value={boardPassword} onChange={onBoardPasswordChange}></input>
            </div>
          </div>
        </div>
        <div className="board-input-wrapper">
          <textarea value={boardContent} onChange={onBoardContentChange}></textarea>
          <button onClick={() => {addNewBoard(fakeName, boardPassword, boardContent, isPrivateBoard, userID)}}>저장 해버리기~</button>
        </div>
      </div>
      <div className="title-password"></div>
      <div className="pagination-wrapper"></div>
    </div>

  )
}