import React from 'react';
import {Text, View, SafeAreaView, StyleSheet, TextInput} from 'react-native';
import {colors} from '../Config/constants';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text>Create New Account </Text>
        <TextInput placeholder="Enter your name!" />
        <TextInput placeholder="Enter your email!" />
        <TextInput placeholder="Enter your password!" />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
});

export default SignUp;
