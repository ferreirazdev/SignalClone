import * as React from 'react';
import { Text, Image, View, StyleSheet, FlatList, Pressable } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';

import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function UsersScreen() {

  return (
    <View style={styles.page}>
      <FlatList 
        data={chatRoomsData}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <ChatRoomItem chatRoom={item}/>}
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
