import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './src/state/reducer'

import { Card } from './src/components/Card'

const store = createStore(reducer)

export default () => (
  <Provider store={store}>
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>UNTRNET</Text>
      </View>
      <View style={styles.cardContainer}>
        <Card />
        <Card />
        <Card />
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.footer}>Select a node to get started</Text>
      </View>
    </View>
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardContainer: {
    flex: 0.7,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  footerContainer: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: 'magenta',
    fontSize: 20
  },
  footer: {
    color: 'magenta'
  }
})
