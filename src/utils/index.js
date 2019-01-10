import { Dimensions, Platform, Share } from 'react-native'
import { dark, light } from '../styles'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const getDeviceWidth = Dimensions.get('window').width
export const getDeviceHeight = Dimensions.get('window').height

export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (height === 812 || width === 812)
  )
}

export function ifIphoneX(iphoneXStyle, regularStyle) {
  if (isIphoneX()) {
    return iphoneXStyle
  }
  return regularStyle
}

export function isAndroid() {
  return Platform.OS === 'android'
}

export function ifAndroid(androidStyle, regularStyle) {
  if (isAndroid()) {
    return androidStyle
  }
  return regularStyle
}

const isFunction = input => typeof input === 'function'
export function renderIf(predicate) {
  return function (elemOrThunk) {
    return predicate
      ? isFunction(elemOrThunk)
        ? elemOrThunk()
        : elemOrThunk
      : null
  }
}

export function checkTheme(theme) {
  return {
    backgroundColor: theme === 'dark' ? dark.secondaryColor : light.background
  }
}

export function guid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}
