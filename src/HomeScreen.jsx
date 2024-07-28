import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <Text>HomeScreen</Text> */}
      <View style={{flex: 0.5, alignItems: 'center'}}>
        <Image style={styles.logo} source={require('./assets/logo2.png')} />
        <Text style={styles.title}>
          Information Technology Service SEO, SMM, Web Design & Development,
          Mobile App Design & Development.
        </Text>

        <Text style={styles.desc}>
          At our company , we harness the power of technology to drive digital
          transformation and empower businesses to thrive. Our team of experts
          crafts innovative software solutions that streamline processes,
          enhance productivity, and foster growth. With a passion for excellence
          and a customer-centric approach, we deliver tailored solutions that
          meet the unique needs of our clients. By combining cutting-edge
          technology with industry expertise, we help businesses succeed in a
          rapidly evolving landscape.
        </Text>
      </View>
      <View style={{flex: 0.4, justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={styles.gotoProducts}
          onPress={() => navigation.navigate('Products')}>
          <Text style={styles.gotoProductsText}>Our Products</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  logo: {
    resizeMode: 'contain',
    width: 320,
    height: 60,
  },
  title: {
    color: '#000',
    marginVertical: 10,
    fontSize: 22,
    marginHorizontal: 34,
    fontWeight:'500'
  },
  desc:{
    color:'#000',
    fontSize:20,
    marginHorizontal:22,
    justifyContent:'center',
  },
  gotoProducts: {
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 10,
    marginHorizontal: 30,
  },
  gotoProductsText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
});
