import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'

class Login extends Component {
  render() {
    return <View />
  }
}

const enhance = compose(
  connect(state => ({
    theme: state.theme.theme,
    language: state.config.language
  }))
)
export default enhance(Login)
