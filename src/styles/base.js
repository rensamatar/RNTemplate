import { Platform } from 'react-native'

export default {
  // Fonts
  fontSize: 16,
  fontFamily: Platform.OS === 'ios' ? 'Roboto-Light' : 'RobotoLight',
  // Misc.
  borderRadius: 3,
  padding: 3,
  margin: 3
}
