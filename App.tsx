import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import UserContextProvider from './src/contexts/user/UserContext';
import AuthNavigator from './src/navigators/AuthNavigator';

export default function App() {
  return (
   <NavigationContainer>
     <UserContextProvider>
       <AuthNavigator />
     </UserContextProvider>
   </NavigationContainer>
  );
}


