import * as constants from '../config/constants'

const initialState = {
  theme: 'dark'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme
      }
    default:
      return state
  }
}

