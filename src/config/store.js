import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import reducers from '../reducers'
import { changeTheme, changeLanguage } from '../actions'
import * as constants from './constants'
import { setLocale } from '../locale'
import moment from 'moment'

const store = createStore(reducers, applyMiddleware(logger))

// Load stored theme.
AsyncStorage.getItem(constants.APP_THEME).then(theme => {
  const _theme = theme || 'dark'
  store.dispatch(changeTheme(_theme))
})

// Load stored language.
AsyncStorage.getItem(constants.APP_LANGUAGE).then(language => {
  const _language = language || 'en'
  if (_language === 'th') {
    require('moment/locale/th')
    moment.locale('th')
  }
  setLocale(_language)
  moment.locale(_language)
  store.dispatch(changeLanguage(_language))
})

export default store
