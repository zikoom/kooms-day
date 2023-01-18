import { combineReducers } from "@reduxjs/toolkit";
import {
  SOCKET_CONNECTION, ACTION_SOCKET_INIT_STATE
} from '../action/actions'

function socketManager(state = ACTION_SOCKET_INIT_STATE, action) {
  console.log('socketManger in. action: ', action);
  switch(action.type){
    case SOCKET_CONNECTION:
      return {
        ...state,
        isConnected: action.state
      }
    default:
      return state;
  }
}

export default combineReducers({
  socket: socketManager,
})