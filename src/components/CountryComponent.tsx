import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image } from 'react-native';
import Country from '../entities/country';
import { countryComponentStyles } from '../style/styles';
import { useSelector } from 'react-redux';


type Props = {
  navigation: any,
  country: Country
}

const CountryComponent = ({ navigation, country }: Props) => {
  const theme = useSelector((state: any) => state.theme.theme);
  const styles = countryComponentStyles(theme);
  return (
    <View >
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CountryDetails', { country })}>
        <Image
          source={{ uri: country.flag }}
          style={styles.icon}
        />
        <Text style={styles.text}>{country.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CountryComponent;

