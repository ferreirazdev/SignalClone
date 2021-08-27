import React from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';


export default function ChatRoomItem(){
  return(
    <View style={styles.container}>
      <Image 
          source={{uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png'}}
          style={styles.image}  
        />
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>4</Text>
        </View>
        <View style={styles.rightContainer}>
          <View style={styles.row}>
            <Text style={styles.name}>Elon Musk</Text>
            <Text style={styles.text}>11:11 AM</Text>
          </View>
          <Text numberOfLines={1} style={styles.text}>Hola hola, irineu! Como andas manito? Come to brazil baby</Text> 
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 10,
  },
  badgeContainer: {
    backgroundColor: '#3777f0',
    width: 20,
    height: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 45,
    top: 10,
  },
  badgeText: {
    color: 'white',
    fontSize: 12
  },
  rightContainer:{
    flex: 1,
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 3
  },
  text: {
    color: 'grey'
  }
});
