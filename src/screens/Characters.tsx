import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../styles/baseStyles'
import Header from '../components/Header'

const Characters = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Character Screen</Text>
    </SafeAreaView>
  )
}

export default Characters

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.lightblue,
      height: "100%"
  }
})