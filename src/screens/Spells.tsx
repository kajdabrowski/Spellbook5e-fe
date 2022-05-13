import { StyleSheet, Text, View, Button } from 'react-native'
import React, { useContext } from 'react'

import { getAllSpells,getAllSpells2, getBardSpells, getSpellsByClassAndLevel } from '../api'
import { UserContext } from '../contexts/user/UserContext'

const Spells = () => {
const {token} = useContext(UserContext)!

  const handleGetSpells = async () => {
    const spells = await getSpellsByClassAndLevel("bard", 5, token! )
  }
  return (
    <View>
      <Text>Spell Screen</Text>
      <View>
        <Button title={"NY"} onPress={handleGetSpells} />
      </View>
    </View>
  )
}

export default Spells

const styles = StyleSheet.create({})