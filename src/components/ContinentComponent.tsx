import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import { useGetCountryByRegionQuery } from '../api/api'
import { Region } from '../entities/continents'
import Country from '../entities/country'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParamList } from '../screens/Stack'

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
      style={styles.container}
      onPress={() => navigation.navigate('Country', { countries: data })}
    >
      <View style={styles.iconContainer}>
        <Icon name="map-pin" size={24} color="black" />
      </View>
      <Text style={styles.text}>{region}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
})
