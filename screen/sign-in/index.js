import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Header from '../../components/Header';
import {Button, ActivityIndicator, TextInput} from 'react-native-paper';
import Axios from '../../utils/Axios';

export default function SignUp({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordSecure, setIsPasswordSecure] = useState(true);
  const [loading, setLoading] = useState(false);

  // this is a submit data.
  const submit = () => {
    setLoading(true);
    Axios.post('https://akshay-flopkart.herokuapp.com/api/users/signin', {
      email,
      password,
    })
      .then(res => {
        console.log('sign in data =========>>>>>>>>', res.data);
        navigation.navigate('Dashboard');
      })
      .catch(err => {
        console.log(err.message);
        alert('Please valid email and password');
      });
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} />
      {/* this is a  sign in Page */}

      <View style={styles.form_page}>
        <Text style={styles.heading}>Sign In</Text>

        {/* this is a Email Address */}

        <TextInput
          label="Email"
          style={styles.form_text}
          value={email}
          onChangeText={email => setEmail(email)}
        />
        {/* this is a  password */}

        <TextInput
          label="Password"
          style={styles.password_text}
          value={password}
          onChangeText={password => setPassword(password)}
          secureTextEntry={isPasswordSecure}
          right={
            <TextInput.Icon
              name={() => (
                <Icon
                  name={!isPasswordSecure ? 'eye' : 'eye-slash'}
                  size={20}
                  color={'#000'}
                />
              )}
              onPress={() => {
                isPasswordSecure
                  ? setIsPasswordSecure(false)
                  : setIsPasswordSecure(true);
              }}
            />
          }
        />
        {/* button in signUp */}
        <Button
          style={styles.btn}
          mode="contained"
          color="#8ff2a9"
          onPress={() => submit()}>
          {loading ? <Text>Loading...</Text> : <Text>Sign Up</Text>}
        </Button>

        {/* this is create a new coustomer  */}
        <View style={styles.acount_container}>
          <Text style={styles.user_text}>New customer? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.create_text}> Create an account! </Text>
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
    marginHorizontal: 16,
    marginVertical: 16,
  },
  // new user text
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
