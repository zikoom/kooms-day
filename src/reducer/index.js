import { combineReducers } from "@reduxjs/toolkit";
import {
  SOCKET_CONNECTION, ACTION_SOCKET_INIT_STATE, SOCKET_ID, SOCKET_NICKNAME
} from '../action/actions'

function socketManager(state = ACTION_SOCKET_INIT_STATE, action) {
  switch(action.type){
    case SOCKET_CONNECTION:
      return {
        ...state,
        isConnected: action.state
      }
    case SOCKET_ID:
      return {
        ...state,
        ID: action.state
      }
    case SOCKET_NICKNAME:
      return {
        ...state,
        nickname: action.state
      }
    default:
      return state;
  }
}

export default combineReducers({
  socket: socketManager,
})