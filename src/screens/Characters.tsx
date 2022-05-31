import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../styles/baseStyles'
import Header from '../components/Header'

const Characters = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
        <Text style={styles.characterItem}>Name Character 1</Text>
        <Text style={styles.characterItem}>Name Character 2</Text>
        <Text style={styles.characterItem}>Name Character 3</Text>
    </SafeAreaView>
  )
}

export default Characters

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.lightblue,
      height: "100%",
      alignItems: "center",
  },
  
  characterItem: {
    margin: 5,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    textAlign: "center",
    width: "90%",
    fontWeight: "700"
  }
})