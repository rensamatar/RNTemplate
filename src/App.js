import React, { Component } from 'react'
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import Route from './config/routes'
import { Provider } from 'react-redux'
import store from './config/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar translucent={true} barStyle={'light-content'} />
          <Route />
        </SafeAreaView>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'transparent'
  }
})
