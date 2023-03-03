import * as React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={styles.mainScreen}>
      <Text style={styles.footerText}>All rights reserved by Littel Lemon, 2023</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainScreen: {
    flex: 0.05,
    backgroundColor: '#F4CE14',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
});
