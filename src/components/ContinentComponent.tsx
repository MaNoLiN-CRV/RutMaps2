import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useGetCountryByRegionQuery } from '../api/api'
import { Region } from '../entities/continents'
import { continentComponentStyles } from '../style/styles'
import { useSelector } from 'react-redux'

type ContinentComponentProps = {
  navigation: any;
  region: Region;
};

export default function ContinentComponent({ navigation, region }: ContinentComponentProps) {
  const { data, isLoading, error } = useGetCountryByRegionQuery(region);
  const theme = useSelector((state: any) => state.theme.theme);
  const styles = continentComponentStyles(theme);
  if (isLoading) {
    return <Text style={styles.text}>Loading...</Text>;
  }
  if (error) {
    console.log(error);
    return <Text style={styles.text}>Error</Text>;
  }
  if (!data) {
    return <Text style={styles.text}>No data available</Text>;
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Country', { countries: data })}
    >
     
      <Text style={styles.text}>{region}</Text>
    </TouchableOpacity>
  );
}



