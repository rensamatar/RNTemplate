import I18n from 'react-native-i18n'
import en from './en'
import th from './th'

I18n.fallbacks = true
I18n.translations = {
  en,
  th
}

export const setLocale = locale => {
  I18n.locale = locale
}

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
  return I18n.t(name, params)
}

export default I18n
