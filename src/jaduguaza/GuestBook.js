import './GuestBook.scss'

import { firestore } from "../js/firebase"

export default function GuestBook(){

  console.log('firesotre: ', firestore);

  return (
    <div className="guset-book">
      <div>
        <button>테스트 ~</button>
      </div>
      <div className="title-wrapper"></div>
      <div className="editor-wrapper"></div>
      <div className="board-wrapper"></div>
      <div className="pagination-wrapper"></div>
    </div>

  )
}