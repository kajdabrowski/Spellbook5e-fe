import { StyleSheet, Text, View, TextInput, Image } from 'react-native'
import {useContext, useState} from 'react'
import { colors } from '../styles/baseStyles'
import { UserContext } from '../contexts/user/UserContext'
import Button from '../components/Button'

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
      <Image source={require("../../assets/images/DnD_Logo.png")} style={styles.image} />
      <Text style={styles.imageText}>FIFTH EDITION SPELLBOOK</Text>
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
      secureTextEntry={true}

      />
      <View>
          {/* <Button color={"white"} title="LOG IN" onPress={handleLogin}/> */}
        <Button style={"button"} title={"LOG IN"} onPress={handleLogin}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: colors.lightblue,
      alignItems: "center",
      justifyContent: "center",
      // justifyContent: "flex-start",
      height: "100%",
    },
    image: {
      height: 100,
      width: 300,
      marginVertical: 10
    },
    imageText: {
      color: colors.dndred,
      fontWeight: "700",
      marginBottom: 50
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
        marginTop: 75,
        alignSelf: "center",
        padding: 10,
        backgroundColor: colors.dndred,
        // fontWeight: "700"
    },
})

export default Login