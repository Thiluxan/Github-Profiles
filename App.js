import React from 'react';
import HomeScreen from './components/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import RepoList from './components/RepoList';
import Profile from './components/Profile';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
         <Stack.Screen name="Home" component={HomeScreen}/>
         <Stack.Screen name="Repos" component={RepoList}/>
         <Stack.Screen name="Profile" component={Profile}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
}

