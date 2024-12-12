import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import Country from '../entities/country';
import config from '../config/config';
import { RootStackParamList } from '../screens/Stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = {
  navigation: any,
  country: Country
}

const CountryComponent = (  { navigation , country} : Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('CountryDetails', {country})}>
      <Image
        source={{ uri: country.flag }}
        style={styles.icon}
      />
      <Text style={styles.text}>{country.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  icon: {
    width: 24,
    height: 24,
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});



export default CountryComponent;
