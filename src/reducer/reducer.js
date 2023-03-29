import { combineReducers } from "@reduxjs/toolkit";
import {
  SOCKET_CONNECTION, ACTION_SOCKET_INIT_STATE, CHAT_ID, CHAT_NICKNAME, CHAT_ADD_TEXT, CHAT_ROOMID, CHAT_CLEAR_TEXT
} from '../action/actions'
import { ACTION_LOADING_INIT_STATE, LOADING_DISPLAY } from "../action/loading";

import { ACTION_GOOGLE_OAUTH_INIT_STATE, GOOGLE_OAUTH_SET_MANAGER, GOOGLE_OAUTH_SET_TOKEN } from "../action/oauth_actions";
import { USERINFO_INIT_STATE, USERINFO_SETLOGIN, USERINFO_SETLOGOUT, USERINFO_SETNAME } from "../action/userinfo_actions";



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
    case CHAT_CLEAR_TEXT:
      return {
        ...state,
        msgs: []
      }
    default:
      return state
  }
}

function oauthManager(state = ACTION_GOOGLE_OAUTH_INIT_STATE, action) {
  switch(action.type){
    case GOOGLE_OAUTH_SET_MANAGER:
      return {
        ...state,
        auth_uri: action.state.auth_uri,
        client_id: action.state.client_id,
        client_secret: action.state.client_secret,
      }

    case GOOGLE_OAUTH_SET_TOKEN:
      return {
        ...state,
        access_token: action.state
      }
    default:
      return state
  }
}
function userinfo(state = USERINFO_INIT_STATE, action) {
  switch(action.type){

    case USERINFO_SETNAME:
      return {
        ...state,
        name: action.state
      }

    case USERINFO_SETLOGIN:
      return {
        ...state,
        isUserLogin: true
      }
    case USERINFO_SETLOGOUT:
      return {
        ...state,
        isUserLogin: false,
        name: '',
      }

    default:
      return state
  }
}

function loadingManager(state = ACTION_LOADING_INIT_STATE, action){
  switch(action.type){
    case LOADING_DISPLAY:
      return {
        ...state,
        isDisplay: action.state
      }
    default:
      return state
  }
}

export default combineReducers({
  socket: socketManager,
  googleOauth: oauthManager,
  userinfo: userinfo,
  loadingManager: loadingManager
})