import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ContactRow from '../Companents/ContactRow';
import {colors} from '../Config/constants';
import Separator from '../Companents/Separator';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Cell from '../Companents/Cell';

const Settings = () => {
  return (
    <View>
      <ContactRow
        name="Habibe"
        subtitle="me@habibe.com"
        style={styles.contratRow}
      />
      <Separator />
      <Cell
        title="Logout"
        iconFirst="log-out-sharp"
        iconEnd="chevron-forward-outline"
        iconColor={colors.iconRed}
        onPress={() => {
          Alert.alert('HEY!', 'Logout?');
        }}
      />
      <Cell
        title="Help"
        iconFirst="information-sharp"
        iconEnd="chevron-forward-outline"
        iconColor="#2192FF"
        onPress={() => {
          Alert.alert('HEY!', 'Help!');
        }}
        style={{marginTop: 20}}
      />
      <Cell
        title="Tell a Friend"
        iconFirst="umbrella-sharp"
        iconEnd="chevron-forward-outline"
        iconColor="#865DFF"
        onPress={() => {
          Alert.alert('HEY!', "Don't touch me!");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contratRow: {
    backgroundColor: 'white',
    marginTop: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },
});

export default Settings;
