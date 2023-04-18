import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../Config/constants';

const ContactRow = ({name, subtitle, onPress, style}) => {
  return (
    <TouchableOpacity style={[styles.row, style]} onPress={onPress}>
      <View style={styles.avatar}>
        <Text style={styles.avatarLabel}>
          {name
            .split('')
            .reduce((prev, current) => `${prev}${current[0]}`, ' ')}
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name} </Text>
        <Text style={styles.subtitle}>{subtitle} </Text>
      </View>
      <Icon name="chevron-forward-outline" size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: colors.avatar,
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarLabel: {
    fontSize: 20,
    color: '#fff',
  },

  textContainer: {
    flex: 1,
    marginStart: 16,
  },

  name: {
    fontSize: 16,
  },

  subtitle: {
    marginTop: 2,
    color: '#565656',
  },
});

export default ContactRow;
