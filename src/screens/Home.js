import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Container } from '../components'
import { dark, light } from '../styles'

class Home extends Component {
  render() {
    return (
      <Container
        backgroundColor={
          this.props.theme === 'dark' ? dark.secondaryColor : light.background
        }
      >
        <View>
          <Text>Welcome home :)</Text>
        </View>
      </Container>
    )
  }
}

const enhance = compose(
  connect(state => ({
    theme: state.theme.theme,
    language: state.config.language
  }))
)
export default enhance(Home)
