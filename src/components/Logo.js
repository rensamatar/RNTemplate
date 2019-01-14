import React, { Component } from 'react'
import {
  View,
  Text,
  Keyboard,
  Animated,
  Platform,
  Dimensions,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'

const ANIMATION_DURATION = 250
const _WIDTH = Dimensions.get('window').width / 2
const LARGE_CONTAINER_SIZE = _WIDTH
const SMALL_CONTAINER_SIZE = _WIDTH / 2
const SMALL_IMAGE_SIZE = _WIDTH / 3
const LARGE_IMAGE_SIZE = _WIDTH / 2

class Logo extends Component {
  constructor(props) {
    super(props)

    this.containerImageWidth = new Animated.Value(LARGE_CONTAINER_SIZE)
    this.imageWidth = new Animated.Value(LARGE_IMAGE_SIZE)
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow'
    let hideListener = 'keyboardWillHide'
    if (Platform.OS === 'android') {
      showListener = 'keyboardDidShow'
      hideListener = 'keyboardDidHide'
    }
    this.keyboardShowListener = Keyboard.addListener(
      showListener,
      this.keyboardShow
    )
    this.keyboardHideListener = Keyboard.addListener(
      hideListener,
      this.keyboardHide
    )
  }

  componentWillUnMount() {
    this.keyboardShowListener.remove()
    this.keyboardHideListener.remove()
  }

  keyboardShow = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: SMALL_CONTAINER_SIZE,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: SMALL_IMAGE_SIZE,
        duration: ANIMATION_DURATION
      })
    ]).start()
  }

  keyboardHide = () => {
    Animated.parallel([
      Animated.timing(this.containerImageWidth, {
        toValue: LARGE_CONTAINER_SIZE,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(this.imageWidth, {
        toValue: LARGE_IMAGE_SIZE,
        duration: ANIMATION_DURATION
      })
    ]).start()
  }

  render() {
    let imageStyle = [
      styles.logo,
      { width: this.imageWidth },
      this.props.tintColor ? { tintColor: this.props.tintColor } : null
    ]

    return (
      <View style={styles.container}>
        <Animated.Image
          style={imageStyle}
          source={require('../assets/nlogo.png')}
          resizeMode={'contain'}
        />
        <Text style={styles.text}>{this.props.appName}</Text>
      </View>
    )
  }
}

const enhance = compose(
  connect(state => ({
    theme: state.theme.theme,
    language: state.config.language
  }))
)
export default enhance(Logo)

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 28,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: '700',
    color: 'white'
  }
})
