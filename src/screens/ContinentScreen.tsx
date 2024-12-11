import { FlatList, View, Text } from 'react-native'
import React from 'react'
import { Continent } from '../entities/responses/countryResponse'
import ContinentComponent from '../components/ContinentComponent'

export default function ContinentScreen() {
  const continents = Object.values<string>(Continent)

  const renderItem = ({ item }: { item: string }) => (
    <View>
      <ContinentComponent  />
    </View>
  )

  return (
    <View>
      <FlatList
        data={continents}
        renderItem={renderItem}
        keyExtractor={item => item}
      />
    </View>
  )
}
