import React from 'react';
import {
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home';
import Details from '../screens/details';
import Request from '../screens/request';
import Send from '../screens/send';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
          name="Home"
          component={Home}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{ gestureEnabled: false }}
        />
         <Stack.Screen
          name="Request"
          component={Request}
          options={{ gestureEnabled: false }}
        />
          <Stack.Screen
          name="Send"
          component={Send}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
 
});
