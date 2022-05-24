import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { Spell } from '../types'
import Header from "../components/Header"
import { colors } from "../styles/baseStyles"
import Button from "../components/Button"
import { useNavigation } from '@react-navigation/native'



interface SpellProps {
    route: {
      params: {
        spell: Spell
      };
    };
  }

const SingleSpell = (props:SpellProps) => {

    const navigation = useNavigation()

    const handlePress = () => {
        navigation.goBack()
    }
    
    const { spell } = props.route.params
  return (
    <SafeAreaView style={styles.container}>
        <Header />
        <View style={styles.topInfo}>
            <Text>{spell.name}</Text>
            <Text>{spell.level} {spell.school}</Text>
            <Text>Casting time: {spell.casting_time}</Text>
            <Text>Range: {spell.range}</Text>
            <Text>Components: {spell.components}</Text>
            <Text>Duration: {spell.duration}</Text>
        </View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Text>{spell.desc}</Text>
        </ScrollView>
        <View style={styles.bottomInfo}>
            <Text>Castable by: {spell.dnd_class}</Text>
            <Text>Source: {spell.page}</Text>
        </View>
        <Button onPress={handlePress} title={"GO BACK"}/>
    </SafeAreaView>
  )
}

export default SingleSpell

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightblue,
        height: "100%"
    },
    topInfo: {
        marginVertical: 10,
        // borderBottomWidth: 1,
        // borderColor: colors.dndred
    },
    contentContainer: {
        paddingHorizontal: 5,
        paddingVertical: 10
    },
    bottomInfo: {
        marginVertical: 5,
            // borderTopWidth: 1,
            // borderColor: colors.dndred
    }

})