import { View, Text } from 'react-native'
import React from 'react'

import { FlatList } from 'react-native-gesture-handler'
import CountryComponent from '../components/CountryComponent'

import Country from '../entities/country';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Stack';
import { useSelector } from 'react-redux';
import { continentStyles } from '../style/styles';

type Props = NativeStackScreenProps<RootStackParamList, 'Country'>;


export default function CountryScreen( { navigation, route:{params:{ countries} } }: Props ) {
  const theme = useSelector((state: any) => state.theme.theme);
  const styles = continentStyles(theme);
  console.log("Countries: " + countries);
  return (
    <View style={styles.container}>
      <FlatList 
      data={countries}
      renderItem={({ item }: { item: Country }) => <CountryComponent navigation={navigation} country={item} />}
      keyExtractor={item => item.name + " country"}
      />
    </View>
  )
}