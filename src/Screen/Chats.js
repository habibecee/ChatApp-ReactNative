import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView, Alert} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ContactRow from '../Companents/ContactRow';
import Separator from '../Companents/Separator';

const Chats = ({navigation}) => {
  useEffect(() => {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      navigation.navigate('SignUp');
    }
  }, []);

  return (
    <SafeAreaView>
      <ContactRow
        name="Hamçenaz"
        subtitle="Röraydın matruşkalarım 👻"
        onPress={() => Alert.alert('Hey')}
      />
      <Separator />
      <ContactRow
        name="Dasue"
        subtitle="Urfalı zeynoooo, mardinli zeynoo 💃🏼"
        onPress={() => Alert.alert('Hey')}
      />
      <Separator />
      <ContactRow
        name="Hilili"
        subtitle="Merhaba oyuncak bebeklerim 🌸 "
        onPress={() => Alert.alert('Hey')}
      />
      <Separator />
      <ContactRow
        name="Heyel"
        subtitle="Onları ben doğurdum yiyemezsiniz 😏"
        onPress={() => Alert.alert('Hey')}
      />
      <Separator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default Chats;
