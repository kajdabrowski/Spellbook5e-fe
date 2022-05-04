import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../contexts/user/UserContext'
import Login from "../screens/Login"
import Placeholder from '../screens/Placeholder'

const AuthNavigator: React.FC = () => {
     const { user } = useContext(UserContext)!

    return !user ? <Login /> : <Placeholder />;

}

export default AuthNavigator
