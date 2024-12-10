import { View, Text } from 'react-native'
import React from 'react'
import Country from '../entities/country'

export default function CountryDetailsCard( { name, capital, language, flag, coords: { lat, lng } }: Country ) {
  return (
    <View>
      <Text>CountryDetailsCard</Text>
    </View>
  ) 
}