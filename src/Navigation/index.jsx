import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen, HomeScreen} from '../screens';
import {useSelector} from 'react-redux';
import {IState} from '../redux';
const Stack = createNativeStackNavigator();

const AutStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};
const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

let stackApp = () => {
  let {user} = useSelector(state => state.userReducer);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <>
          {!user.email && !user.password ? (
            <Stack.Screen name="AutStack" component={AutStack} />
          ) : (
            <Stack.Screen name="MainStack" component={MainStack} />
          )}
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default stackApp;

const styles = StyleSheet.create({});
