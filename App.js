import React from 'react';
import {Text, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from './src/Config/constants';

import Chats from './src/Screen/Chats';
import Settings from './src/Screen/Settings';
import SignUp from './src/Screen/SignUp';

const ChatsStack = createNativeStackNavigator();

const ChatsScreen = () => {
  return (
    <ChatsStack.Navigator>
      <ChatsStack.Screen name="Chats" component={Chats} />
    </ChatsStack.Navigator>
  );
};

const SettingsStack = createNativeStackNavigator();

const SettingsScreen = () => {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

const Tabs = createBottomTabNavigator();

const TabsScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Chats') {
            iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-outline';
          } else if (route.name === 'Settings') {
            iconName = focused
              ? 'ellipsis-horizontal-sharp'
              : 'ellipsis-horizontal-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.active,
        tabBarInactiveTintColor: colors.inactive,
      })}>
      <Tabs.Screen name="Chats" component={ChatsScreen} />
      <Tabs.Screen name="Settings" component={SettingsScreen} />
    </Tabs.Navigator>
  );
};

function App() {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator headerMode="none" mode="model">
        {/* BU ÖZELLİKLER ÇALIŞMIYOR YENİDEN BAKILACAK ---->>>  headerMode="none" mode="model" */}

        <MainStack.Screen name=" " component={TabsScreen} />
        <MainStack.Screen name="SignUp" component={SignUp} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
