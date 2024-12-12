import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useGetCountryByRegionQuery } from '../api/api'
import { Region } from '../entities/continents'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../screens/Stack'
import { continentComponentStyles } from './styles'

type Props = NativeStackScreenProps<RootStackParamList, 'Country'>;
type ContinentComponentProps = {
  navigation: any;
  region: Region;
};

export default function ContinentComponent({ navigation, region }: ContinentComponentProps) {
  const { data, isLoading, error } = useGetCountryByRegionQuery(region);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    console.log(error);
    return <Text>Error</Text>;
  }
  if (!data) {
    return <Text>No data available</Text>;
  }

  return (
    <TouchableOpacity
      style={continentComponentStyles.container}
      onPress={() => navigation.navigate('Country', { countries: data })}
    >
      <View style={continentComponentStyles.iconContainer}>
        <Icon name="" size={24} color="black" />
      </View>
      <Text style={continentComponentStyles.text}>{region}</Text>
    </TouchableOpacity>
  );
}



