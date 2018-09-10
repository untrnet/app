import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const Card = () => (
  <View style={styles.cardContainer}>
    <View style={styles.titleContainer}>
      <View>
        <Text style={styles.title}>Untrnode #0100</Text>
      </View>
      <View>
        <Text style={styles.secondaryTitle}>Liverpool Street</Text>
      </View>
    </View>
    <View style={styles.contentContainer}>
      <Text style={styles.experimentName}>Messages in a Bottle</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  cardContainer: {
    width: 330,
    height: 100,
    flex: 0.25,
    justifyContent: 'space-between',
    backgroundColor: 'black'
  },
  titleContainer: {
    flex: 0.25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  contentContainer: {
    flex: 0.75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  experimentName: {
    color: 'white',
    fontSize: 20
  },
  title: {
    fontSize: 15,
    color: 'white'
  },
  secondaryTitle: {
    color: 'white'
  }
})
