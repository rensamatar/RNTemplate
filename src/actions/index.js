import { AsyncStorage } from 'react-native'
import * as constants from '../config/constants'

// Action creators
export const changeTheme = theme => {
  AsyncStorage.setItem(constants.APP_THEME, theme)
  return {
    type: constants.CHANGE_THEME,
    theme
  }
}

export const changeLanguage = language => {
  AsyncStorage.setItem(constants.APP_LANGUAGE, language)
  return {
    type: constants.CHANGE_LANGUAGE,
    language
  }
}

export function loggedIn(userData) {
  return {
    type: constants.AUTH_LOGGED_IN,
    payload: userData
  }
}

export function skipLogin() {
  return {
    type: constants.AUTH_SKIPPED_LOGIN
  }
}

export function passedWalkthrough() {
  return {
    type: constants.AUTH_PASSED_WALKTHROUGH
  }
}

export function loggedOut() {
  return {
    type: constants.AUTH_LOGGED_OUT
  }
}
