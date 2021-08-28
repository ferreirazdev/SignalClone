import * as React from 'react';
import { Text, Image, View, StyleSheet, FlatList, Pressable } from 'react-native';

import Users from '../assets/dummy-data/Users';
import UserItem from '../components/UserItem';

export default function UsersScreen() {

  return (
    <View style={styles.page}>
      <FlatList 
        data={Users}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <UserItem user={item}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  },
});
