import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <SafeAreaView>
      <Image style={styles.headerImage} source={require("../../assets/images/DnD_Logo2.png")} />
    </SafeAreaView>
  )
}

export default Header

const styles = StyleSheet.create({
    // headerImageContainer: {
    //     flex: 1
    // },
    headerImage: {
        height: 50,
        width: 355,
        justifyContent: "center",
        margin: 10
    }
})