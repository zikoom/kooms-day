import config from '../config.json'
import axios from 'axios'

console.log('CONFIG: ', config);

const testLoad = async () => {
  try{
    const data = await axios.get(config.SOCKET_SERVER + 'test/123')
    console.log('data: ', data);
  }catch(e){
    console.log("e: ", e);
  }
}

testLoad();

const Chat = () => {
  return (
    <div>
      <h1>Chat Component</h1>
    </div>
  )
}

export default Chat