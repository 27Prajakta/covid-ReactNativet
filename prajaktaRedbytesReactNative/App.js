import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LandingScreen, Login, StateInfo, Drawer } from './app/screens';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Drawer} />
        <Stack.Screen name="State" component={StateInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;