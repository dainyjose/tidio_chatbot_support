import React from 'react';
import RootNavigator from './navigation/RootNavigator';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <>
        <View testID="app-root">
          <Text>Hello World</Text>
        </View>
        <RootNavigator />
      </>
    </Provider>
  );
}
