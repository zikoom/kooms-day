/**
 * action types
 */

export const SOCKET_CONNECTION = 'SOCKET/CONNECTION'
export const SOCKET_ID = 'SOCKET/ID'
export const SOCKET_NICKNAME = 'SOCKET/NICKNAME'

/**
 * initial State
 */

export const ACTION_SOCKET_INIT_STATE = {
  isConnected: false,
  ID: '',
  nickname: '',
}

/**
 * SOCKET action creators
 */

export function SET_SOCKET_CONNECTION(state) {
  //state: boolean
  return { type: SOCKET_CONNECTION, state}
}

export function SET_SOCKET_ID(state) {
  return { type: SOCKET_ID, state}
}

export function SET_SOCKET_NICKNAME(state) {
  return { type: SOCKET_NICKNAME, state}
}