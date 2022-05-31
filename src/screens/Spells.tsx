import { StyleSheet, Text, View, TextInput, FlatList, ListRenderItem, Pressable, SafeAreaView} from 'react-native'
import React, { useContext, useEffect, useState } from 'react'

import { getSpellsByClassAndLevel } from '../api'
import { UserContext } from '../contexts/user/UserContext'
import { colors } from '../styles/baseStyles'
import Button from '../components/Button'
import { Spell } from '../types'
import Header from '../components/Header'
import { useNavigation } from "@react-navigation/native";

type SpellProps = {
  spells: Spell[]
}

const Spells = (props: SpellProps) => {
const {token} = useContext(UserContext)!
const [characterClass, setCharacterClass] = useState("")
const [characterLevel, setCharacterLevel] = useState("") 
const [spells, setSpells] = useState<Spell[]>([])

const navigation = useNavigation()

  const handleGetSpells = async () => {
    // const spells = await getSpellsByClassAndLevel("bard", 5, token! )
    const fetchedSpells:Spell[] = await getSpellsByClassAndLevel(characterClass, Number.parseInt(characterLevel), token!)
    setSpells(fetchedSpells)
  }

  const handleSpellItem = (spell: any) =>{
    // @ts-ignore
    navigation.navigate("Single spell", {spell})
    setCharacterClass("")
    setCharacterLevel("")
  }

  const Item = ({item}: {item: Spell}) => (
    <View style={styles.spellItem}>
      <Pressable onPress={() => handleSpellItem(item)}>
        <Text style={styles.spellItemHeadline}>{item.name}</Text>
        <Text style={styles.spellItemText}>{item.level}</Text>
        <Text>{item.school}</Text>
      </Pressable>
    </View>
  )

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.headline}>Search spells by character class and spell level:</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput} 
        placeholder='Character class' 
        placeholderTextColor={colors.lightgrey} 
        keyboardType='default' 
        value={characterClass} 
        onChangeText={(text) => setCharacterClass(text)}
        />
        <TextInput 
        style={styles.textInput} 
        placeholder='Spell level' 
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
        renderItem={({item}) => <Item item={item} />} 
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
    fontSize: 16,
    marginVertical: 15
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
    width: "90%"
  },
  spellItemHeadline: {
    fontWeight: "bold"
  },
  spellItemText: {
    fontStyle: "italic"
  }
})