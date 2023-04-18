import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const Button = ({title, styleVariants}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor:
            styleVariants === 'primary' ? 'transparent' : 'black',
          paddingHorizontal: styleVariants === 'primary' ? 0 : 16,
        },
      ]}>
      <Text
        style={[
          styles.buttonLabel,
          {color: styleVariants === 'primary' ? 'black' : 'white'},
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 6,
  },

  buttonLabel: {
    fontSize: 18,
  },
});

export default Button;
