import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet } from 'react-native'
import Spells from '../screens/Spells'
import Characters from '../screens/Characters'
import Settings from '../screens/Settings'

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
 return (
     <Tab.Navigator>
         <Tab.Screen name={"Spells"} component={Spells} />
         <Tab.Screen name={"Characters"} component={Characters} />
         <Tab.Screen name={"Settings"} component={Settings} />
     </Tab.Navigator>
 )
}

export default MainTabNavigator

const styles = StyleSheet.create({})