import React, { Component } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { dark, light, colors } from '../styles'

class LogInButton extends Component {
  render() {
    return (
      <TouchableOpacity
        {...this.props}
        onPress={this.props.onPress}
        activeOpacity={0.6}
        style={[
          styles.container,
          {
            backgroundColor:
              this.props.theme === 'dark'
                ? dark.primaryColor
                : light.primaryColor
          }
        ]}
      >
        <Text style={styles.text}>{this.props.text}</Text>
      </TouchableOpacity>
    )
  }
}

const enhance = compose(
  connect(state => ({
    theme: state.theme.theme,
    language: state.config.language
  }))
)
export default enhance(LogInButton)

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    paddingVertical: 15
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    color: colors.white
  }
})
