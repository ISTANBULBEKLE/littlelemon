import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.headerScreen}>
      <Text style={styles.headerText}>Little Lemon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerScreen: {
    flex: 0.1,
    backgroundColor: '#F4CE14',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },
});
