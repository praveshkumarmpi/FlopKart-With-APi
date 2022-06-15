import {
  StyleSheet,
  View,
  Image,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../../components/Header';
import Axios from '../../utils/Axios';

export default function Dashboard({navigation}) {
  const [userData, setUserData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Axios.get('https://akshay-flopkart.herokuapp.com/api/products')
      .then(response => {
        console.log('dashboard data ----->');
        setUserData(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log('Dashboard error ----> ', error);
      });
  }, []);

  return (
    <View>
      {isLoading ? (
        <View style={styles.screen}>
          <ActivityIndicator size={'large'} style={styles.loader} />
        </View>
      ) : (
        <View>
          {/* <Text>{userData[0].name}</Text> */}
          <Header navigation={navigation} />

          <ScrollView style={{marginBottom: 130}}>
            <View
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {userData.map((product, index) => {
                return <PageContainer product={product} key={index} />;
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}

const PageContainer = ({product}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: `https://akshay-flopkart.herokuapp.com${product.image}`,
        }}
      />

      <View style={styles.rataing_container}>
        <Text style={styles.heading}>{product.name}</Text>
        <Text style={styles.heading}>Rating :{product.rating}</Text>
        <Text style={styles.heading}>Price : {product.price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#99f7b6',
  },

  //  main the code
  container: {
    width: '47%',
    justifyContent: 'center',
    borderRadius: 12,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  img: {
    width: 190,
    height: 190,
  },
  rataing_container: {
    backgroundColor: '#b1bbc9',
    height: 150,
    borderRadius: 12,
  },
  heading: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    paddingVertical: 10,
  },
  rating_text: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    paddingHorizontal: 5,
  },
  price_text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  loader: {
    marginVertical: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
  },
});
