import * as React from 'react';
import { Text, Image, View, StyleSheet, FlatList, Pressable } from 'react-native';
import ChatRoomItem from '../components/ChatRoomItem';
import { Auth } from 'aws-amplify'

import chatRoomsData from '../assets/dummy-data/ChatRooms';

export default function TabOneScreen() {

  const logOut = () => {
    Auth.signOut()
  }

  return (
    <View style={styles.page}>
      <Pressable onPress={logOut} style={{ height: 150}}>
        <Text>SAAAI MZR</Text>
      </Pressable>
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
