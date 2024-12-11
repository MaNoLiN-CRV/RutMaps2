import { FlatList, View, Text } from 'react-native'
import React from 'react'
import ContinentComponent from '../components/ContinentComponent'
import { ContinentEnum } from '../entities/continents'
import { useContinents } from '../hooks/useContinent'

/**
 * A screen that displays a list of continents. Each item in the list displays the name of the continent, and when pressed, it navigates to the CountryScreen with the selected continent.
 * @returns {React.ReactElement} A React element representing the component
 */
export default function ContinentScreen() {
  const continents = useContinents();
 
  return (
    <View>
      <FlatList
        data={continents}
        renderItem={renderItem => <ContinentComponent {...renderItem.item} />}
        keyExtractor={item => item.name}
      />
    </View>
  )
}
