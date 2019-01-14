import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { colors, dark, light } from '../styles'

class Input extends Component {
  render() {
    return (
      <TextInput
        {...this.props}
        autoCapitalize={'none'}
        autoCorrect={false}
        keyboardType={this.props.keyboardType}
        placeholderTextColor={'rgba(225,225,225,0.7)'}
        style={[
          styles.container,
          {
            backgroundColor:
              this.props.theme === 'dark' ? dark.inputColor : light.inputColor
          }
        ]}
        underlineColorAndroid={'transparent'}
        onChangeText={keyword => this.props.onInputChange(keyword)}
      />
    )
  }
}

const enhance = compose(
  connect(state => ({
    theme: state.theme.theme,
    language: state.config.language
  }))
)
export default enhance(Input)

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '100%',
    backgroundColor: 'transparent',
    marginBottom: 10,
    padding: 10,
    color: colors.white
  }
})
