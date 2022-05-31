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
            <Text style={styles.spellName}>{spell.name}</Text>
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
            <Text style={styles.spellClass}>Castable by: {spell.dnd_class}</Text>
            <Text style={styles.spellSource}>Source: {spell.page}</Text>
        </View>
        <Button onPress={handlePress} title={"GO BACK"} style={"button"}/>
    </SafeAreaView>
  )
}

export default SingleSpell

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.lightblue,
        height: "100%",
    },
    topInfo: {
        marginVertical: 15,
        paddingHorizontal: 5,
        fontStyle: 'italic'
    },
    contentContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    bottomInfo: {
        marginVertical: 15,
        fontStyle: "italic",
        paddingHorizontal: 5
    },
    spellName: {
        textAlign: "center",
        fontWeight: "700",
        fontSize: 21,
        color: colors.dndred,
        marginBottom: 25,
    },
    spellClass: {
        fontStyle: "italic"
    },
    spellSource: {
        fontStyle: "italic"
    }


})