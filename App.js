import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import reducer from './src/state/reducer'

import { actions } from './src/state/geolocation'

const store = createStore(reducer)

// TODO: Update App component to be stateless when redux is definitely working
// export default () => (
//   <Provider store={store}>
//     <View style={styles.container}>
//       <Text>Hello world I am working</Text>
//     </View>
//   </Provider>
// )

export default class App extends React.Component {
  componentDidMount () {
    store.dispatch(actions.getLocation())
  }

  render () {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.text}>Hello world I am working</Text>
        </View>
      </Provider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  }
})
