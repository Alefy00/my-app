import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Logo from './components/Logo/Logo';
import { AkaFrom } from './components/AkaFrom/AkaFrom';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Logo'>
        <Stack.Screen name='Logo' component={Logo}/>
        <Stack.Screen name='AkaFrom' component={AkaFrom}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  );
};



export default App;
