import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ProductDetails = ({route}) => {
  const {product} = route.params;
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.productImage} />
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '80%',
    height: 300,
    borderRadius: 10,
    alignSelf: 'center',
  },
  productName: {
    fontSize: 24,
    fontWeight: '800',
    marginVertical: 10,
    color: '#000',
  },
  productDescription: {
    fontSize: 20,
    color: '#000',
  },
});
