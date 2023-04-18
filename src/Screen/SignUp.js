import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import {colors} from '../Config/constants';
import Button from '../Companents/Button';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // const createAccount = async () => {
  //   setIsLoading(true);
  //   try {
  //     const response = await firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(email, password);

  //     await response.user.updateProfile({
  //       displayName: name,
  //     });
  //     setIsLoading(false);
  //   } catch (error) {
  //     setIsLoading(false);
  //     Alert.alert('Error', error.message);
  //   }
  // };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentContainer}>
          <Text style={styles.title}>Create New Account </Text>
          <TextInput
            value={name}
            placeholder="Enter your name!"
            style={styles.input}
            onChange={text => setName(text)}
          />
          <TextInput
            value={email}
            placeholder="Enter your email!"
            style={styles.input}
            onChange={text => setEmail(text)}
          />
          <TextInput
            value={password}
            placeholder="Enter your password!"
            style={styles.input}
            onChange={text => setPassword(text)}
          />

          <View style={styles.buttonsContainer}>
            <Button title="Sign In" styleVariants="primary" />
            <Button
              title="Sign Up"
              styleVariants="secondary"
              onPress={() => createAccount()}
              loading={isLoading}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
  },
  contentContainer: {
    padding: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: 'white',
    marginBottom: 16,
  },
  input: {
    backgroundColor: 'white',
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
  },
});

export default SignUp;
