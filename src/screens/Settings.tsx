import React, {useContext} from 'react'
import { UserContext } from '../contexts/user/UserContext';
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../styles/baseStyles';
import Button from '../components/Button';
    
    const Settings = () => {
        const { logout } = useContext(UserContext)!;

        const handleLogout = () => {
            //@ts-ignore
            logout()
        }

    return (
    <View style={styles.container}>
      <Text>Logout screen</Text>

      {/* <Button title={"Log out"} onPress={handleLogout}/> */}
      <Button title={"LOG OUT"} style={"button"} onPress={handleLogout}/>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.lightblue,
      height: "100%"
  }
})