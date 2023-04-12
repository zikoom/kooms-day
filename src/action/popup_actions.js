/**
 * action types
 */


export const ACCOUNT_SETTING_POPUP_SET_STATE = 'POPUP/ACCOUNT_SETTING_POPUP/STATE'



/**
 * initial State
 */

export const ACTION_POPUP_INIT_STATE = {
  showAccountSettingPopup: false
}

/**
 * OAUTH action creators
 */

export function SET_ACCOUNT_SETTING_POPUP_STATE(state) {
  return { type: ACCOUNT_SETTING_POPUP_SET_STATE, state}
}