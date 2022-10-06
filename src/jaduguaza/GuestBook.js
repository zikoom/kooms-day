import './GuestBook.scss'

import { db } from "../js/firebase"
import {ref, push, child, update, onValue} from "firebase/database"
import { useState } from 'react'
import { useSelector } from 'react-redux'
import BoardReply from '../components/BoardReply'

export default function GuestBook(){
  const boardPublicCheckBoxID = 'public-checkbox'
  const [fakeName, setFakeName] = useState('');
  const [boardPassword, setBoardPassword] = useState('');
  const [boardContent, setBoardContent] = useState('');
  const [isPrivateBoard, setIsPrivateBoard] = useState(false)

  const boardRef = ref(db, 'boards');
  onValue(boardRef, (snapshot) => {
    console.log('snapShot: ', snapshot);
  })

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

  /**
   * 댓글 관련 인풋창 몽땅 초기화
   */
  const resetInputs = () => {
    setFakeName('');
    setBoardPassword('');
    setBoardContent('');
    setIsPrivateBoard(false);
  }

  const addNewBoard = async (fakeName, boardPassword, content, isPrivateBoard, uniqueID = null) => {
    console.log('addNewBoard in.');
    console.log("params: ", fakeName, boardPassword, content, isPrivateBoard, uniqueID);
    if(!uniqueID){
      alert("구글 로그인해야만 방명록을 작성 가능합니다!!");
      return;
    }

    if(!fakeName || !boardPassword || !boardContent){
      alert("아이디, 비번, 글 내용을 작성해주세요.");
      return;
    }

    const curTimestamp = new Date().getTime();
    const newPostKey = push(child(ref(db), uniqueID)).key;
    console.log('newPostKey: ', newPostKey);

    const board = {
      fakeName: fakeName,
      boardPassword: boardPassword,
      content: content,
      isPrivateBoard: isPrivateBoard,
      uniqueID: uniqueID,
      curTimestamp: curTimestamp
    }

    try{
      // await set(ref(db, 'boards/test'), {
      //   name: 'test',
      //   content: 'test'
      // })
      const updates = {};

      updates[`/boards/${uniqueID}/${newPostKey}`] = board;
      await update(ref(db), updates)
      alert("저장 성공!!");
      resetInputs();
    }catch(err){
      console.log('err in addNewBoard. err: ', err);
      alert("저장 실패!!");
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
      <div className="reply-wrapper">
        <BoardReply username="testuser" content="test-content"></BoardReply>
      </div>
      <div className="pagination-wrapper"></div>
    </div>

  )
}