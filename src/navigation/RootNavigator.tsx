import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ChatBotScreen from '../screens/ChatBotScreen';

const Stack = createNativeStackNavigator();
import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();
export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  } else {
    console.warn('[NAVIGATION] Not ready yet');
  }
}

const RootNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="ChatBot" component={ChatBotScreen} options={{ title: 'Support Chat' }} />
  </Stack.Navigator>
);

export default RootNavigator;
