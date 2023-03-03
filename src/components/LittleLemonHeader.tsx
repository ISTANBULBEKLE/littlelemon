import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.headerText}>Welcome to Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 0.2,
    backgroundColor: '#F4CE14',
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: 'black',
  },
});
