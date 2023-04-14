import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../Config/constants';

const Separator = () => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: colors.separator,
    marginStart: 88,
  },
});

export default Separator;
