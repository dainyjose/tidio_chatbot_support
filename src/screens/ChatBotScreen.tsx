import React from 'react';
import { View, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

// const TIDIO_WIDGET_URL = 'https://code.tidio.co/tuqs5lkqjdvrcqjne4zfetiqplzwytpk.html';

const ChatBotScreen = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://dainyjose.github.io/tidio-widget./tidio.html' }}
        style={{ flex: 1 }}
        javaScriptEnabled
        domStorageEnabled
        startInLoadingState
      />
    </View>
  );
};
export default ChatBotScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
