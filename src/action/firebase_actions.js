/**
 * action types
 */


/**
 * FIREBASE 로그인 결과로 받은 유저정보를 state에 저장
 */
export const FIREBASE_LOGIN_SET_USER = 'FIREBASE_LOGIN/SET_USER'


/**
 * initial State
 */

export const ACTION_FIREBASE_LOGIN_INIT_STATE = {

  isLogined: false,
  userinfo: null,
}

/**
 * OAUTH action creators
 */



export function SET_FIREBASE_USERINFO(state) {
  //state: boolean
  return { type: FIREBASE_LOGIN_SET_USER, state}
}