/**
 * action types
 */

export const LOADING_DISPLAY = 'LOADING/DISPLAY'


/**
 * initial State
 */

export const ACTION_LOADING_INIT_STATE = {
  isDisplay: false,
}

/**
 * SOCKET action creators
 */

export function SET_LOADING_DISPLAY(state) {
  //state: boolean
  return { type: LOADING_DISPLAY, state}
}
