import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/Header';
import {Button, TextInput} from 'react-native-paper';
import axios from 'axios';

export default function Register({navigation}) {
  const [email, setEmail] = useState();
  const [firstName, setName] = useState();
  const [lastName, setLastName] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();

  const createAccount = () => {
    axios
      .post('https://akshay-flopkart.herokuapp.com/api/users/register', {
        firstName,
        lastName,
        email,
        password,
      })
      .then(res => {
        console.log('register Data -----> ', res.data);
        alert('user is successfully registered........');
        navigation.navigate('SignUp');
      })
      .catch(err => {
        console.log('error --->', err.message);
        alert('please valid email and password in react native...');
      });
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />

      {/* create account container  */}
      <View style={styles.form_page}>
        <Text style={styles.heading}>Create a new account</Text>

        {/* this is a Email Address */}

        <TextInput
          label="First Name"
          style={styles.form_text}
          value={firstName}
          onChangeText={name => setName(name)}
        />

        {/* Last Name */}
        <TextInput
          label="Last Name"
          style={styles.form_text}
          value={lastName}
          onChangeText={lastName => setLastName(lastName)}
        />
        {/* email */}
        <TextInput
          label="Email"
          style={styles.form_text}
          value={email}
          onChangeText={email => setEmail(email)}
        />
        {/* password */}
        <TextInput
          label="Password"
          style={styles.form_text}
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
        />
        {/* confirm password */}
        <TextInput
          label="Confirm Password"
          style={styles.form_text}
          value={confirmpassword}
          onChangeText={confirmpassword => setConfirmPassword(confirmpassword)}
          secureTextEntry={true}
        />
        {/* button in signUp */}
        <Button
          style={styles.btn}
          mode="contained"
          color={'#1687a7'}
          onPress={() => createAccount()}>
          Create Account
        </Button>
        {/* this is a already account text */}

        <View style={styles.acount_container}>
          <Text style={styles.user_text}>Already have an account? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={{flex: 1}}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.create_text}>Sign in! </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* fotter in page */}
      <View style={styles.footer_container}>
        <Text style={styles.footer_text}>
          © FlopKart || All rights reserved.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    marginHorizontal: 16,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 15,
  },
  form_text: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fcf5f5',
  },
  password_text: {
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fcf5f5',
  },
  btn: {
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  acount_container: {
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  user_text: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  create_text: {
    color: '#1687a7',
    fontSize: 16,
  },
  // footer css
  footer_container: {
    padding: 10,
    backgroundColor: '#c9d6df',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  footer_text: {
    color: '#000',
  },
});
