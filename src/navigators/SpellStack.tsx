import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Spells from '../screens/Spells'
import SingleSpell from '../screens/SingleSpell'

const Stack = createStackNavigator()

const SpellStack = () => {
  return (
    <Stack.Navigator 
    screenOptions={{headerShown:false}}
    initialRouteName="All Spells">
    <Stack.Screen name="All Spells" component={Spells} />
    <Stack.Screen name="Single spell" component={SingleSpell} />
  </Stack.Navigator>
  )
}

export default SpellStack

const styles = StyleSheet.create({})