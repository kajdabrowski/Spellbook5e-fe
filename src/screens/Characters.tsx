import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { colors } from '../styles/baseStyles'

const Characters = () => {
  return (
    <View style={styles.container}>
      <Text>Character Screen</Text>
    </View>
  )
}

export default Characters

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.lightblue,
      height: "100%"
  }
})