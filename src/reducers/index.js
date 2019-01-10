import { combineReducers } from 'redux'
import theme from './theme'
import config from './config'
import auth from './auth'

export default combineReducers({
  theme,
  config,
  auth
})
