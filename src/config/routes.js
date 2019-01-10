import { Easing, Animated } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Home, Login, Register } from '../screens'

const transitionConfig = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true,
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps

      const thisSceneIndex = scene.index
      const width = layout.initWidth

      const translateX = position.interpolate({
        inputRange: [thisSceneIndex - 1, thisSceneIndex],
        outputRange: [width, 0],
      })

      return { transform: [{ translateX }] }
    },
  }
}

const nullHeader = ({ navigation }) => ({
  header: null
})

const ROUTE = {
  nav_home: {
    screen: Home,
    navigationOptions: nullHeader
  },
  nav_login: {
    screen: Login,
    navigationOptions: nullHeader
  },
  nav_register: {
    screen: Register,
    navigationOptions: nullHeader
  }
}

const CONFIG = {
  initialRouteName: 'nav_login',
  navigationOptions: {
    headerMode: 'none'
  },
  transitionConfig
}

export default createStackNavigator(ROUTE, CONFIG)
