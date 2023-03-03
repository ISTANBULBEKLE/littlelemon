/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import {StyleSheet, View} from 'react-native';

// Import a local component here
import LittleLemonHeader from './src/components/LittleLemonHeader';

export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
