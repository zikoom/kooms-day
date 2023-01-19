/**
 * action types
 */

export const SOCKET_CONNECTION = 'SOCKET/CONNECTION'
export const CHAT_ID = 'CHAT/ID'
export const CHAT_ROOMID = 'CHAT/ROOMID'
export const CHAT_NICKNAME = 'CHAT/NICKNAME'
export const CHAT_ADD_TEXT = 'CHAT/ADD_TEXT'
export const CHAT_CLEAR_TEXT = 'CHAT/CLEAR_TEXT'

/**
 * initial State
 */

export const ACTION_SOCKET_INIT_STATE = {
  isConnected: false,
  ID: '',
  roomID: '',
  nickname: '',
  msgs: [],
}

/**
 * SOCKET action creators
 */

export function SET_SOCKET_CONNECTION(state) {
  //state: boolean
  return { type: SOCKET_CONNECTION, state}
}

export function SET_SOCKET_ID(state) {
  return { type: CHAT_ID, state}
}

export function SET_CHAT_ROOM_ID(state) {
  return { type: CHAT_ROOMID, state}
}

export function SET_CHAT_NICKNAME(state) {
  return { type: CHAT_NICKNAME, state}
}

export function CHAT_ADD(state) {
  return { type: CHAT_ADD_TEXT, state}
}

export function CHAT_CLEAR() {
  return { type: CHAT_CLEAR_TEXT}
}