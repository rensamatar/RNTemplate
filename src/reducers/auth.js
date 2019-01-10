import * as constants from '../config/constants'

const initialState = {
  isLoggedIn: false,
  hasSkippedLogin: false,
  hasPassedWalkthrough: false,
  hasPressedSingupButton: false,
  id: null,
  name: null,
  userToken: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case constants.AUTH_LOGGED_IN:
      return Object.assign({}, state, {
        hasPassedWalkthrough: state.hasPassedWalkthrough,
        isLoggedIn: true,
        id: action.data.id,
        name: action.data.name,
        userToken: action.data.userToken
      })
    case constants.AUTH_SKIPPED_LOGIN:
      return Object.assign({}, state, {
        isLoggedIn: false,
        hasSkippedLogin: true,
        id: null,
        name: null,
        hasPassedWalkthrough: state.hasPassedWalkthrough
      })
    case constants.AUTH_PASSED_WALKTHROUGH:
      return Object.assign({}, state, {
        isLoggedIn: false,
        hasSkippedLogin: false,
        id: null,
        name: null,
        hasPassedWalkthrough: true
      })
    case constants.AUTH_LOGGED_OUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        hasSkippedLogin: false,
        loggedOut: true,
        hasPassedWalkthrough: state.hasPassedWalkthrough,
        id: null,
        name: null
      })
    default:
      return state
  }
}
