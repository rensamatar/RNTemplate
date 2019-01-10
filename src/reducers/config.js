import * as constants from '../config/constants'

const initialState = {
  language: 'en'
}

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language
      }
    default:
      return state
  }
}

