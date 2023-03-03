import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import MenuItems from './MenuItems';

export default function LittleLemonBody() {
  return (
    <View style={styles.bodyScreen}>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>Welcome to Little Lemon</Text>
        <Text style={styles.headerInlineText}>
          Little Lemon is a charming neighborhood bistro that serves simple food
          and classic cocktails in a lively but casual environment. We would
          love to hear more about your experience with us!
        </Text>
        <MenuItems />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bodyScreen: {
    flex: 0.85,
    backgroundColor: '#495E57',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 0.2,
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  headerInlineText: {
    flex: 0.6,
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    textAlign: 'center',
  },
});
