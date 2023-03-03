/**
 * action types
 */

export const GOOGLE_OAUTH_SET_MANAGER = 'GOOGLE_OAUTH/SET_MANAGER'
export const GOOGLE_OAUTH_SET_TOKEN = 'GOOGLE_OAUTH/SET_TOEKN'


/**
 * initial State
 */

export const ACTION_GOOGLE_OAUTH_INIT_STATE = {

  scope: encodeURIComponent('https://www.googleapis.com/auth/userinfo.profile'),
  redirect_uri: `${window.location.origin}`,
  access_token: '',
}

/**
 * OAUTH action creators
 */

export function SET_OAUTH_MANAGER(state) {
  //state: boolean
  return { type: GOOGLE_OAUTH_SET_MANAGER, state}
}

export function SET_GOOGLE_OAUTH_ACCESS_TOKEN(state){
  return {type: GOOGLE_OAUTH_SET_TOKEN, state}
}