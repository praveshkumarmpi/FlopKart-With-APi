import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Header({navigation}) {
  return (
    <View style={styles.header}>
      {/* header text */}
      <View style={styles.header_titles}>
        <Text style={styles.header_text}>FlopKart</Text>
      </View>
      {/* cart */}
      <TouchableOpacity style={styles.header_cart}>
        <Text style={styles.cart_text}>Cart</Text>
      </TouchableOpacity>
      {/* Sing In */}
      <TouchableOpacity
        style={styles.header_signIn}
        onPress={() => navigation.navigate('SignUp')}>
        <Text style={styles.sign_text}>SignIn</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: '#c9d6df',
    flexDirection: 'row',
  },
  header_titles: {
    width: '60%',
    justifyContent: 'center',
  },
  header_text: {
    fontSize: 20,
    paddingLeft: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  header_cart: {
    width: '20%',
    justifyContent: 'center',
  },
  cart_text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
    color: '#000',
  },
  header_signIn: {
    width: '20%',
    justifyContent: 'center',
  },
  sign_text: {
    fontSize: 18,
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Helvetica',
  },
});
