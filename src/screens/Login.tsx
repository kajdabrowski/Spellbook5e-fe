import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import {useContext, useState} from 'react'
import { UserContext } from '../contexts/user/UserContext'

const Login: React.FC = () => {
    const { login } = useContext(UserContext)!
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = () => {
        login(email, password)
        console.log("IN HANDLELOGIN");
        
    }

  return (
    <View style={styles.container}>
      <Text style={styles.loginText}>Login to Spellbook5e</Text>
      <TextInput 
        style={styles.textInput}
        placeholder='E-mail'
        autoCapitalize='none'
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
      style={styles.textInput}
      placeholder='Password'
      autoCapitalize='none'
      value={password}
      onChangeText={(text) => setPassword(text)}
      />
      <View style={styles.loginButton}>
          <Button color={"white"} title="Log in" onPress={handleLogin}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
    },
    loginText: {
        color: "white",
        fontSize: 16
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
    loginButton: {
        width: 150,
        borderRadius: 20,
        marginTop: 20,
        alignSelf: "center",
        padding: 10,
        backgroundColor: "red",
    }
})

export default Login