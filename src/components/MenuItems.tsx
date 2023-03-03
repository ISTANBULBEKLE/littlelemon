import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default function MenuItems() {
  const menuList = [
    'Kebap',
    'Dolma',
    'Chicken Doner',
    'Chicken Kebap',
    'Fish and Chips',
  ];

  return (
    <View style={styles.menuScreen}>
      <ScrollView
        horizontal={false}
        indicatorStyle={'white'}
        style={styles.listStyle}>
        <Text style={styles.menuListStyle}> Menu List</Text>
        <Text style={styles.menuListItemStyle}>{menuList[0]}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menuScreen: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#381E57',
  },
  listStyle: {
    opacity: 0.6,
    borderRadius: 2,
  },
  menuListStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  menuListItemStyle: {
    color: 'white',
  },
});
