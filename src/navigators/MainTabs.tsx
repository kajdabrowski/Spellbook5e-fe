import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Spells from '../screens/Spells'
import Characters from '../screens/Characters'
import Settings from '../screens/Settings'
import { colors } from "../styles/baseStyles";
import { SpellIcon, CharacterIcon, LogoutIcon, SettingsIcon } from "../components/iconList";
import SpellStack from './SpellStack'

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
 return (
     <Tab.Navigator
     initialRouteName="Spells"
     screenOptions={({route}) => ({
      tabBarActiveTintColor: colors.dndred,
      tabBarInactiveTintColor: colors.black,
      tabBarHideOnKeyboard: true,
      tabBarShowLabel: true,
      tabBarStyle: {
      backgroundColor: colors.lightgrey
      },
      tabBarIcon:({size, color}) => {
        if (route.name === "Spells") {
            return <SpellIcon size={20} color={color}/>
        }
        if (route.name === "Characters") {
            return <CharacterIcon size={20} color={color}/>
        }
        if(route.name === "Settings") {
            return <SettingsIcon size={20} color={color}/>
        }
      }
     })}
     >
         <Tab.Screen name={"Spells"} component={SpellStack} options={{headerShown: false}}/>
         <Tab.Screen name={"Characters"} component={Characters} options={{headerShown: false}}/>
         <Tab.Screen name={"Settings"} component={Settings} options={{headerShown: false}}/>
     </Tab.Navigator>
 )
}

export default MainTabNavigator

const styles = StyleSheet.create({})