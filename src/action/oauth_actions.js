/**
 * action types
 */

export const OAUTH_SET_MANAGER = 'OAUTH/SET_MANAGER'


/**
 * initial State
 */

export const ACTION_OAUTH_INIT_STATE = {
  oauthManger: null,
}

/**
 * OAUTH action creators
 */

export function SET_OAUTH_MANAGER(state) {
  //state: boolean
  return { type: OAUTH_SET_MANAGER, state}
}