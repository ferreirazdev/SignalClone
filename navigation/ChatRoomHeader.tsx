import React, {useEffect, useState} from 'react';
import { Text, View, Image, Pressable, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';
import { DataStore } from '@aws-amplify/datastore';
import Auth from '@aws-amplify/auth';
import { ChatRoomUser, User } from '../src/models';

const ChatRoomHeader = ({ id, children }) => {
  const [user, setUser] = useState<User|null>(null)

  const { width } = useWindowDimensions();
  console.log(id)

  useEffect(() => {
    if(!id) {
      return;
    } 
    
    const fetchUsers = async () => {
      const fetchedUsers = (await DataStore.query(ChatRoomUser))
        .filter(chatRoomUser => chatRoomUser.chatroom.id === id)
        .map(chatRoomUser => chatRoomUser.user);

      // setUsers(fetchedUsers);

      const authUser = await Auth.currentAuthenticatedUser();
      setUser(fetchedUsers.find(user => user.id !== authUser.attributes.sub) || null);
    };
    fetchUsers();
  }, []);


  return(
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width: width - 50,
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: user?.imageUri,
        }}
        style={{ width: 30, height: 30, borderRadius: 30, marginLeft: -30 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "left",
          marginLeft: 20,
          fontWeight: "bold",
        }}
      >
        {user?.name}
      </Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
      <Pressable>
        <Feather
          name="edit-2"
          size={24}
          color="black"
          style={{ marginHorizontal: 10, marginRight: 30 }}
        />
      </Pressable>
    </View>
  )
}

export default ChatRoomHeader;