import { StyleSheet, Text, View, TextInput, FlatList, ListRenderItem, SafeAreaView} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { getSpellsByClassAndLevel } from '../api'
import { UserContext } from '../contexts/user/UserContext'
import { colors } from '../styles/baseStyles'
import Button from '../components/Button'
import { Spell } from '../types'
import Header from '../components/Header'
// import SpellList from '../components/SpellList'

const Spells = () => {
const {token} = useContext(UserContext)!
const [characterClass, setCharacterClass] = useState("")
const [characterLevel, setCharacterLevel] = useState("") 
const [spells, setSpells] = useState<Spell[]>([]) //spells är data till flatlisten


  const handleGetSpells = async () => {
    // const spells = await getSpellsByClassAndLevel("bard", 5, token! )
    const fetchedSpells:Spell[] = await getSpellsByClassAndLevel(characterClass, Number.parseInt(characterLevel), token!)
    setSpells(fetchedSpells)
  }

  //! spell items in flatlist
  const Item = ({data}: {data: Spell}) => (
    <View style={styles.spellItem}>
      <Text style={styles.spellItemHeadline}>{data.name}</Text>
      <Text style={styles.spellItemText}>{data.level}</Text>
      <Text>{data.school}</Text>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.headline}>Find spells by class and level!</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Class' 
        placeholderTextColor={colors.lightgrey} 
        keyboardType='default' 
        value={characterClass} 
        onChangeText={(text) => setCharacterClass(text)}
        />
        <TextInput 
        style={styles.textInput} 
        placeholder='Level' 
        placeholderTextColor={colors.lightgrey} 
        keyboardType='numeric' 
        textContentType='creditCardNumber'
        value={characterLevel}
        onChangeText={(text) => setCharacterLevel(text)} //?
        />
        <Button 
        title={"SEARCH"} 
        onPress={handleGetSpells} 
        style={"button"}/>
      <SafeAreaView>
      <FlatList
        data={spells}
        renderItem={({item}) => <Item data={item} />} 
        keyExtractor={(item: Spell) => item.name}
      />
      </SafeAreaView>
      </View>
    </SafeAreaView>
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
  spellItem: {
    margin: 3,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 3,
    paddingHorizontal: 15,
    textAlign: "center",
    width: "100%"
  },
  spellItemHeadline: {
    fontWeight: "bold"
  },
  spellItemText: {
    fontStyle: "italic"
  }
})