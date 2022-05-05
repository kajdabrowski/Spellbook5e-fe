import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../contexts/user/UserContext'
import Login from "../screens/Login"
import MainTabNavigator from './MainTabs'

const AuthNavigator: React.FC = () => {
     const { user } = useContext(UserContext)!

    return !user ? <Login /> : <MainTabNavigator />;
}

export default AuthNavigator
