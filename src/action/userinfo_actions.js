/**
 * action types
 */

export const USERINFO_SETNAME = 'USERINFO/SET_NAME'


/**
 * initial State
 */

export const USERINFO_INIT_STATE = {

  name: '',
}

/**
 * OAUTH action creators
 */

export function USERINFO_SET_NAME(state) {
  //state: boolean
  return { type: USERINFO_SETNAME, state}
}
