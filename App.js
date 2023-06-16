import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Dashboard from './Dashboard';
import SenhaRecuperacao from './SenhaRecuperacao';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Hildr Store" component={Dashboard} />
        <Stack.Screen name="Recuperar Senha" component={SenhaRecuperacao} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;