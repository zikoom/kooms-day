/**
 * action types
 */


export const USERINFO_SETLOGIN = 'USERINFO/SET_LOGIN'
export const USERINFO_SETNAME = 'USERINFO/SET_NAME'


/**
 * initial State
 */

export const USERINFO_INIT_STATE = {
  isUserLogin: false,
  name: '',
}

/**
 * OAUTH action creators
 */

export function USERINFO_SET_LOGIN(state) {
  return { type: USERINFO_SETLOGIN, state}
}
export function USERINFO_SET_NAME(state) {
  return { type: USERINFO_SETNAME, state}
}
