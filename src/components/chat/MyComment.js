const MyComment = ({text, nickname}) => {
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
          <span className="timestamp">
            <span className="username">{nickname}</span>
            {/* &bull;<span className="posttime">3 minutes ago</span> */}
          </span>
        </div>
      </div>
    </article>
  )
}

export default MyComment