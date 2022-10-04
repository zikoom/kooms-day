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
          <div className="user-name-wrapper"></div>
          <div className="user-password-info"></div>
        </div>
      </div>
      <div className="title-password"></div>
      <div className="pagination-wrapper"></div>
    </div>

  )
}