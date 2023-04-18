import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ContactRow from '../Companents/ContactRow';
import Separator from '../Companents/Separator';

const chats = [
  {
    users: ['me@habibe.com', 'a@mail.com'],
    messages: [],
  },
  {
    users: ['me@habibe.com', 'b@mail.com'],
    messages: [],
  },
  {
    users: ['me@habibe.com', 'c@mail.com'],
    messages: [],
  },
  {
    users: ['me@habibe.com', 'd@mail.com'],
    messages: [],
  },
];

const Chats = ({navigation}) => {
  useEffect(() => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      navigation.navigate('SignUp');
    }
  }, []);

  // useEffect(() => {
  //   firebase
  //     .firestore()
  //     .collection('chats')
  //     .onSnapshot(snapshot => {
  //       console.warn(snapshot.docs);
  //     });
  // }, []);

  return (
    <SafeAreaView>
      {chats.map((chat, index) => (
        <React.Fragment key={index}>
          {/* <ContactRow
            name={chat.users.find(
              x => x !== firebase.auth().currentUser?.email,
            )}
            subtitle="No message yet!"
            onPress={() => {
              navigation.navigate('Chat');
            }}
          /> */}
          <Separator />
        </React.Fragment>
      ))}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Chats;
