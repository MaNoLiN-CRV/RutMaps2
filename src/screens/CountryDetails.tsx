import { View, Text } from 'react-native'
import React from 'react'
import Country from '../entities/country'
import CountryDetailsCard from '../components/CountryDetailsCard'
import { RootStackParamList } from './Stack'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
type Props = NativeStackScreenProps<RootStackParamList, 'CountryDetails'>;

export default function CountryDetails({ navigation, route: { params: { country } } }: Props) {
  return (
    <View>
      <Text>CountryDetails</Text>
      <CountryDetailsCard {...country}/>
    </View>
  )
}