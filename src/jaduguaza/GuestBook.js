import './GuestBook.scss'

import { firestore } from "../js/firebase"

export default function GuestBook(){

  console.log('firesotre: ', firestore);
  const boardPublicCheckBoxID = 'public-checkbox'

  return (
    <div className="guset-book">
      <div className="title-wrapper"> 방명록을 남겨보아요~</div>
      <div className="editor-wrapper">
        <input type="checkbox" name="" id={boardPublicCheckBoxID} />
        <label htmlFor={boardPublicCheckBoxID}>비공개</label>
        <div className="user-info-wrapper">
          <div className="user-name-wrapper">
            <div className="user-name-icon"></div>
            <div className="user-name-input-wrapper">
              <input type="text" placeholder="이름을 입력하세요" />
            </div>
          </div>
          <div className="user-password-info">
            <div className="user-password-icon">

            </div>
            <div className="user-password-input-wrapper">
              <input type="text" placeholder="비밀번호를 입력하세요" ></input>
            </div>
          </div>
        </div>
        <div className="board-input-wrapper">
          <textarea></textarea>
          <button>저장 해버리기~</button>
        </div>
      </div>
      <div className="title-password"></div>
      <div className="pagination-wrapper"></div>
    </div>

  )
}