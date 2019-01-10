import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, UIManager } from 'react-native'
import Route from './config/routes'
import { Provider } from 'react-redux'
import store from './config/store'

export default class App extends Component {
  componentDidMount() {
    console.disableYellowBox = true
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true)
  }

  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <Route />
        </SafeAreaView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#232632'
  }
})
