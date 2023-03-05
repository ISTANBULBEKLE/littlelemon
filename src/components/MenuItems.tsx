import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';

export default function MenuItems() {
  const menuList = [
    'Kebap',
    'Dolma',
    'Chicken Doner',
    'Chicken Kebap',
    'Fish and Chips',
    'Fish and Chips',
    'Fish and Chips',
    'Crackstick',
    'Dolma',
    'Chicken Doner',
    'Chicken Kebap',
    'Fish and Chips',
    'Crackstick',
    'Dolma',
    'Chicken Doner',
  ];

  return (
    <View style={styles.menuScreen}>
      <ScrollView
        horizontal={false}
        indicatorStyle="white"
        style={styles.listStyle}>
        <Text style={styles.menuListStyle}> Menu List</Text>
        <Text style={styles.menuListItemStyle}>{menuList}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  menuScreen: {
    flex: 1,
  },
  listStyle: {
    flex: 1,
    opacity: 0.6,
    borderRadius: 6,
    borderColor: 'white',
    borderStyle: 'solid',
    borderWidth: 1,
    marginHorizontal: 100,
  },
  menuListStyle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  menuListItemStyle: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 25,
  },
});
