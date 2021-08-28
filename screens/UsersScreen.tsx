import React, {useState, useEffect} from 'react';
import { Text, Image, View, StyleSheet, FlatList, Pressable } from 'react-native';

import Users from '../assets/dummy-data/Users';
import { DataStore } from '@aws-amplify/datastore';
import { User } from '../src/models';

import UserItem from '../components/UserItem';

export default function UsersScreen() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    DataStore.query(User).then(setUsers)
  }, []);

  // useEffect(() =>{
  //   const fetchUsers = async () => {
  //     const fetchedUsers = await DataStore.query(User);
  //     setUsers(fetchedUsers);
  //   }

  //   fetchUsers()
  // }, [])

  return (
    <View style={styles.page}>
      <FlatList 
        data={users}
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
