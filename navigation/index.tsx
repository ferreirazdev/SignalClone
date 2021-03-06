/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { NavigationContainer, DefaultTheme, DarkTheme, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Image, Pressable, Text, useWindowDimensions, View } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';

import ChatRoomHeader from './ChatRoomHeader';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import HomeScreen from '../screens/HomeScreen';
import UsersScreen from '../screens/UsersScreen';

import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import { Feather } from '@expo/vector-icons';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerTitle: HomeHeader }}
      />
      <Stack.Screen 
        name="ChatRoom" 
        component={ChatRoomScreen} 
        options={({ route }) => ({ 
          headerTitle: () => <ChatRoomHeader id={route.params?.id} />, 
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen 
        name="UsersScreen" 
        component={UsersScreen} 
        options={{ 
          title: "Users",
        }}
      />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}

const HomeHeader = (props) => {

  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return(
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        width,
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: "https://github.com/ferreirazdev.png",
        }}
        style={{ width: 30, height: 30, borderRadius: 30 }}
      />
      <Text
        style={{
          flex: 1,
          textAlign: "center",
          marginLeft: 50,
          fontWeight: "bold",
        }}
      >
        Signal
      </Text>
      <Feather
        name="camera"
        size={24}
        color="black"
        style={{ marginHorizontal: 10 }}
      />
      <Pressable onPress={() => navigation.navigate('UsersScreen')}>
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



/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

