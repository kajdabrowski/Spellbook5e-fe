import { StyleSheet, Text, View, TextInput, FlatList, } from 'react-native'
import React, { useContext, useState } from 'react'

import { getAllSpells,getAllSpells2, getBardSpells, getSpellsByClassAndLevel } from '../api'
import { UserContext } from '../contexts/user/UserContext'
import { colors } from '../styles/baseStyles'
import Button from '../components/Button'

const Spells = () => {
const {token} = useContext(UserContext)!
const [characterClass, setCharacterClass] = useState("") //?
const [characterLevel, setCharacterLevel] = useState() //? Måste vara en string, när funktionen tar ett nummer? Typa ett interface eller type?


  const handleGetSpells = async () => {
    const spells = await getSpellsByClassAndLevel("bard", 5, token! )
    // const spells = await getSpellsByClassAndLevel(characterClass, characterLevel, token!) //? Vad jag vill
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find spells by class and level!</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Class' placeholderTextColor={colors.lightgrey} keyboardType='default' value={characterClass} />
        <TextInput style={styles.textInput} placeholder='Level' placeholderTextColor={colors.lightgrey} keyboardType='numeric' value={characterLevel} />
        <Button title={"SEARCH"} onPress={handleGetSpells} style={"button"}/>
      </View>
    </View>
  )
}

export default Spells

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightblue,
    height: "100%"
  },
  headline: {
    textAlign: "center",
  },
  inputContainer: {
    flex: 1,
    alignItems: "center",
    padding: 5,
  },
  textInput: {
    backgroundColor: "white",
    width: "80%",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginVertical: 5,
    borderColor: "grey",
    borderWidth: 1,
    borderRadius: 5,
  }, 
})