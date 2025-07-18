import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigation/RootNavigator';
import RootNavigator from './navigation/RootNavigator';
import FloatingChatButton from './components/chatBotButton';
import { View, StyleSheet } from 'react-native';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState<string | null>(null);

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() => {
            const route = navigationRef.getCurrentRoute();
            if (route) setCurrentRoute(route.name);
          }}
          onStateChange={() => {
            const route = navigationRef.getCurrentRoute();
            if (route) setCurrentRoute(route.name);
          }}
        >
          <RootNavigator />
          <FloatingChatButton currentRoute={currentRoute} />
        </NavigationContainer>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
