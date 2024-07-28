import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: require('./assets/prod1.jpeg'),
    description: 'This is product 1 description.',
  },
  {
    id: 2,
    name: 'Product 2',
    image: require('./assets/prod2.jpeg'),
    description: 'This is product 2 description.',
  },
  {
    id: 3,
    name: 'Product 3',
    image: require('./assets/prod6.jpeg'),
    description: 'This is product 3 description.',
  },
  {
    id: 4,
    name: 'Product 4',
    image: require('./assets/prod4.png'),
    description: 'This is product 4 description.',
  },
  {
    id: 5,
    name: 'Product 5',
    image: require('./assets/prod5.jpeg'),
    description: 'This is product 5 description.',
  },
  {
    id: 6,
    name: 'Product 6',
    image: require('./assets/prod6.jpeg'),
    description: 'This is product 6 description.',
  },
];

const ProductsScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Our software products are designed with precision and built to
        perfection, ensuring seamless performance and unparalleled reliability.
        With rigorous testing and continuous innovation, we deliver top-notch
        solutions that exceed our customers' expectations
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.productContainer}
            onPress={() =>
              navigation.navigate('ProductDetails', {product: item})
            }>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 14,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 20,
    marginVertical: 16,
    color: '#000',
    marginHorizontal: 6,
  },
  productContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'contain',
  },
  productInfo: {
    marginLeft: 20,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  productDescription: {
    fontSize: 16,
    color: '#000',
  },
});
