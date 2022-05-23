import React, {useContext} from 'react'
import { UserContext } from '../contexts/user/UserContext';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { colors } from '../styles/baseStyles';
import Button from '../components/Button';
import Header from '../components/Header';
    
    const Settings = () => {
        const { logout } = useContext(UserContext)!;

        const handleLogout = () => {
            //@ts-ignore
            logout()
        }

    return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text>Logout screen</Text>

      {/* <Button title={"Log out"} onPress={handleLogout}/> */}
      <Button title={"LOG OUT"} style={"button"} onPress={handleLogout}/>
    </SafeAreaView>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.lightblue,
      height: "100%"
  }
})