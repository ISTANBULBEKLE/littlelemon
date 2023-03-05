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
import LittleLemonHeader from './src/components/LittleLemonHeader';
import LittleLemonFooter from './src/components/LittleLemonFooter';
import LittleLemonBody from './src/components/LittleLemonBody';
const name: any = 'LittleLemon';
export default function App() {
  return (
    <View style={styles.container}>
      <LittleLemonHeader />
      <LittleLemonBody name={name} />
      <LittleLemonFooter />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#495E57',
  },
});
