import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button} from 'react-native-paper';

export default function Cart({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your cart is empty!</Text>
      <Button
        mode="contained"
        color={'#1687a7'}
        style={styles.btn}
        onPress={() => navigation.navigate('Dashboard')}>
        Shop Now
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  },
  btn: {
    marginVertical: 10,
    borderRadius: 10,
  },
});
