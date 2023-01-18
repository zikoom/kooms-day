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

export default OtherComment