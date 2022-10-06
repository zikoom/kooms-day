export default function Reply({username="unknown", content="내용없음"}){
  return (
    <div className="reply">
      {/* 답글 zone */}
      <div className="reply-info">
        <span>{username}</span>
      </div>
      <div className="reply-content">
        <p>{content}</p>
      </div>

    </div>
  )
}