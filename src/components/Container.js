import React, { Component } from 'react'
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  StyleSheet
} from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { checkTheme } from '../utils'

class Container extends Component {
  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={[
            styles.container,
            {
              backgroundColor: checkTheme(this.props.theme)
            }
          ]}
        >
          {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const enhance = compose(
  connect(state => ({
    theme: state.theme.theme,
    language: state.config.language
  }))
)
export default enhance(Container)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  }
})
