import { combineReducers } from "@reduxjs/toolkit";
import {
  SOCKET_CONNECTION, ACTION_SOCKET_INIT_STATE, CHAT_ID, CHAT_NICKNAME, CHAT_ADD_TEXT, CHAT_ROOMID
} from '../action/actions'

function socketManager(state = ACTION_SOCKET_INIT_STATE, action) {
  switch(action.type){
    case SOCKET_CONNECTION:
      return {
        ...state,
        isConnected: action.state
      }
    case CHAT_ID:
      return {
        ...state,
        ID: action.state
      }
    case CHAT_ROOMID:
      return {
        ...state,
        roomID: action.state
      }
    case CHAT_NICKNAME:
      return {
        ...state,
        nickname: action.state
      }
    case CHAT_ADD_TEXT:
      return {
        ...state,
        msgs: [...state.msgs, action.state]
      }
    default:
      return state
  }
}

export default combineReducers({
  socket: socketManager,
})