import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native';
import Country from '../entities/country';
import config from '../config/config';
import { RootStackParamList } from '../screens/Stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { countryComponentStyles } from './styles';

type Props = {
  navigation: any,
  country: Country
}

const CountryComponent = (  { navigation , country} : Props) => {
  return (
    <TouchableOpacity style={countryComponentStyles.button} onPress={ () => navigation.navigate('CountryDetails', {country})}>
      <Image
        source={{ uri: country.flag }}
        style={countryComponentStyles.icon}
      />
      <Text style={countryComponentStyles.text}>{country.name}</Text>
    </TouchableOpacity>
  );
};

export default CountryComponent;
