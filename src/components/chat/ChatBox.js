import '../../assets/scss/components/ChatBox.scss'

export default function ChatBox () {
  return (
    <div class='container' ng-cloak ng-app="chatApp">
      {/* <h1>Swanky Chatbox UI With Angular</h1> */}
      <div class='chatbox' ng-controller="MessageCtrl as chatMessage">
        <div class='chatbox__user-list'>
          <h1>User list</h1>
          <div class='chatbox__user--active'>
            <p>Jack Thomson</p>
          </div>
          <div class='chatbox__user--busy'>
            <p>Angelina Jolie</p>
          </div>
          <div class='chatbox__user--active'>
            <p>George Clooney</p>
          </div>
          <div class='chatbox__user--active'>
            <p>Seth Rogen</p>
          </div>
          <div class='chatbox__user--away'>
            <p>John Lydon</p>
          </div>
        </div>
        <div class="chatbox__messages" ng-repeat="message in messages">
          <div class="chatbox__messages__user-message">
            {/* 남의 메세지는 other class 추가 */}
            <div class="chatbox__messages__user-message--ind-message other">
              <p class="name">name</p>
              <br/>
              <p class="message">msgmsg</p>
            </div>
            <div class="chatbox__messages__user-message--ind-message">
              <p class="name">name</p>
              <br/>
              <p class="message">msgmsg</p>
            </div>
          </div>
        </div>
        <form onSubmit={(e) => {e.preventDefault()}}>
          <input type="text" placeholder="Enter your message" />
        </form>
      </div>
    </div>
  )
}