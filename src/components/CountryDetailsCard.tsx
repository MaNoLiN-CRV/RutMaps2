import { View, Text } from 'react-native'
import React from 'react'
import Country from '../entities/country'
import MapComponent from './MapComponent'
import { StyleSheet } from 'react-native'


/**
 * A component that displays details about a country. It displays the country's name in a bigger font, followed by its capital, language, and flag. Finally, it also displays a map with the country's coordinates.
 * @param {{ name: string, capital: string, language: string, flag: string, coords: {lat: number, lng: number} }} props The props of the component. The props must include the country's name, capital, language, flag, and coordinates.
 * @returns {React.ReactElement} A React element representing the component
 */
export default function CountryDetailsCard({ name, capital, language, flag, coords: { lat, lng } }: Country) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.detailText}>Capital: {capital}</Text>
      <Text style={styles.detailText}>Language: {language}</Text>
      <Text style={styles.detailText}>Flag: {flag}</Text>
      <MapComponent lat={lat} lng={lng} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
    margin: 10,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  detailText: {
    fontSize: 16,
  },
});