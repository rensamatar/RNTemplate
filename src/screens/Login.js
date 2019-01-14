import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { dark, light, base, colors } from '../styles'
import { ToastMe, Container, Logo, Input, LogInButton } from '../components'
import { validateEmail } from '../utils'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // Toast me
      message: null,
      type: 'success',
      isToggle: false,
      email: null,
      password: null
    }
  }

  onLoginPress = () => {
    //this.props.navigation.navigate('nav_home')
    //alert('Hello, ' + this.state.email + '\n' + this.state.password)
    if (validateEmail(this.state.email)) {
    } else {
      this.setState({
        type: 'error',
        message: 'Invalid email address',
        isToggle: !this.state.isToggle
      })
    }
  }

  onEmailInputChange = keyword => {
    this.setState({ email: keyword })
  }

  onPasswordInputChange = keyword => {
    this.setState({ password: keyword })
  }

  render() {
    return (
      <Container>
        <Logo tintColor={this.props.primaryColor} appName={'App name'} />
        <View style={styles.formContainer}>
          <Input
            autoCapitalize={'none'}
            onSubmitEditing={() => this.passwordInput.focus()}
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType={'next'}
            placeholder={'Email'}
            onInputChange={this.onEmailInputChange}
          />
          <Input
            returnKeyType={'done'}
            ref={input => (this.passwordInput = input)}
            placeholder={'Password'}
            secureTextEntry
            onInputChange={this.onPasswordInputChange}
          />
          <LogInButton
            text={'Log In'}
            style={styles.buttonContainer}
            onPress={this.onLoginPress}
          />
          <TouchableOpacity>
            <Text style={styles.linkText}>
              Don't have an account?{' '}
              <Text style={{ fontWeight: 'bold' }}>Register</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <ToastMe
          type={this.state.type}
          message={this.state.message}
          visible={this.state.isToggle}
        />
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
export default enhance(Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
  formContainer: {
    padding: 20,
    width: '100%'
  },
  input: {
    height: 48,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    color: colors.white
  },
  buttonContainer: {
    marginTop: 20
  },
  linkText: {
    marginTop: 20,
    fontFamily: base.fontFamily,
    fontSize: base.fontSize,
    textAlign: 'center',
    color: colors.white
  }
})
