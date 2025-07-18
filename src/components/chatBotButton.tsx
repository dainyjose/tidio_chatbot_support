import React from 'react';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { navigate, navigationRef } from '../navigation/RootNavigator'; // this utility calls the navigationRef

export default function FloatingChatButton() {
  const currentRoute = navigationRef.getCurrentRoute()?.name;

  if (!currentRoute || ['ChatBot', 'Login', 'Splash'].includes(currentRoute)) {
    return null;
  }
  return (
    <TouchableOpacity style={styles.fab} onPress={() => navigate('ChatBot')}>
      <Image source={require('../assets/images/robot-assistant.png')} style={styles.icon} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 30,
    backgroundColor: '#1E90FF',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 6,
    zIndex: 999,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
});
