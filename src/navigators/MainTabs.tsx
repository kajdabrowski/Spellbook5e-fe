import { Dimensions, Platform } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Spells from '../screens/Spells'
import Characters from '../screens/Characters'
import Logout from '../screens/Logout'
import { colors } from "../styles/baseStyles";
import { SpellIcon, CharacterIcon, LogoutIcon } from "../components/iconList";

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
      backgroundColor: colors.lightgrey,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,    
      },
      tabBarIcon:({size, color}) => {
        if (route.name === "Spells") {
            return <SpellIcon size={20} color={color}/>
        }
        if (route.name === "Characters") {
            return <CharacterIcon size={20} color={color}/>
        }
        if(route.name === "Logout") {
            return <LogoutIcon size={20} color={color}/>
        }
      }
     })}
     >
         <Tab.Screen name={"Spells"} component={Spells} />
         <Tab.Screen name={"Characters"} component={Characters} />
         <Tab.Screen name={"Logout"} component={Logout} />
     </Tab.Navigator>
 )
}

export default MainTabNavigator

const styles = StyleSheet.create({})