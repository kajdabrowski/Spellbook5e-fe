import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from "../styles/baseStyles"

type ButtonProps = {
    onPress?: () => void,
    style?: string,
    title?: string,
    disabled?: boolean
}

const Button = (props: ButtonProps) => {
  return (
    <Pressable 
        style={styles.button} 
        onPress={props.onPress} 
        disabled={props.disabled}
        >
      <Text style={styles.buttonText}>{props.title}</Text>
      </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        width: 150,
        borderRadius: 20,
        marginTop: 75,
        alignSelf: "center",
        padding: 10,
        backgroundColor: colors.dndred,
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    buttonDisabled: {
        backgroundColor: colors.lightgrey
    }
})