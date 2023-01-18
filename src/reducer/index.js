import { combineReducers } from "@reduxjs/toolkit";
import {
  SET_SOCKET_CONNECTION, ACTION_SOCKET_INIT_STATE
} from '../action/actions'

function socketManager(state = ACTION_SOCKET_INIT_STATE, action) {
  switch(action.type){
    case SET_SOCKET_CONNECTION:
      return {
        ...state,
        isConnected: action.state
      }
    default:
      return state;
  }
}

export default combineReducers({
  socketManager,
})