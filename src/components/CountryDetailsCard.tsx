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
export default function CountryDetailsCard({ name, capital, language, flag, coords }: Country) {
  return (
    <View style={styles.container}>
      <Text style={styles.nameText}>{name}</Text>
      <Text style={styles.detailText}>Capital: {capital}</Text>
      <Text style={styles.detailText}>Language: {language}</Text>
      <Text style={styles.detailText}>Flag: {flag}</Text>

      <View style={styles.container}>
            <View style={styles.mapWrapper}>
                <MapComponent {...coords}/>
            </View>
      </View>


    </View>
  )
}
const styles = StyleSheet.create({
  container: {

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
  mapWrapper: {
    flex: 1,
    
  }
});

const mapStyles = StyleSheet.create({
  container: {
      flex: 1,
      width: '100%',
      height: '100%',
  },
  text: {
      padding: 10,
  },
  mapWrapper: {
      flex: 1, 
      width: '100%',
  }
});