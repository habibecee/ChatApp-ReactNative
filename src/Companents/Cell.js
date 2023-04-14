import React from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {colors} from '../Config/constants';

const Cell = ({title, iconFirst, iconEnd, onPress, iconColor, style}) => {
  return (
    <TouchableOpacity style={[styles.cell, style]} onPress={onPress}>
      <View style={[styles.iconContainer, {backgroundColor: iconColor}]}>
        <IonIcons name={iconFirst} size={24} color={'white'} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <IonIcons name={iconEnd} size={20} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cell: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.separator,
  },

  title: {
    fontSize: 16,
    marginStart: 16,
    flex: 1,
  },

  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Cell;
