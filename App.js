<script src="http://localhost:8097"></script>
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

console.log( ' this is from outside of component')
export default function App() {
  return (
    
    <View style={styles.container}>
      <Text>This is a Test write to see how codes are working</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
