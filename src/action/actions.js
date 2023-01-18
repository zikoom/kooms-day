/**
 * action types
 */

export const SOCKET_CONNECTION = 'SOCKET/CONNECTION'

/**
 * initial State
 */

export const ACTION_SOCKET_INIT_STATE = {
  isConnected: false,
}

/**
 * SOCKET action creators
 */

export function SET_SOCKET_CONNECTION(state) {
  //state: boolean
  return { type: SOCKET_CONNECTION, state}
}