import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameStartView from './screens/GameStartView';

export default function App() {
  return (
    <View style={styles.container}>
      <Header title="Guess A number"/>
      <GameStartView/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1
  }
});
