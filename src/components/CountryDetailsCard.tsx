import { View, Text, Image } from 'react-native'
import React from 'react'
import Country from '../entities/country'
import MapComponent from './MapComponent'
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

/**
 * A component that displays details about a country. It displays the country's name in a bigger font, followed by its capital, language, and flag. Finally, it also displays a map with the country's coordinates.
 * @param {{ name: string, capital: string, language: string, flag: string, coords: {lat: number, lng: number} }} props The props of the component. The props must include the country's name, capital, language, flag, and coordinates.
 * @returns {React.ReactElement} A React element representing the component
 */
export default function CountryDetailsCard({ name, capital, language, flag, coords , map}: Country) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.left}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.detail}>Capital: {capital}</Text>
          <Text style={styles.detail}>Language: {language}</Text>
        </View>
        <View style={styles.right}>
          <Image source={{ uri: flag }} style={styles.flag} />
        </View>
      </View>

        <MapComponent map={map} />
      
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'rgba(128,128,128,0.2)',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  left: {
    flex: 1,
  },
  right: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  detail: {
    fontSize: 16,
    color: '#666',
    marginBottom: 4,
  },
  flag: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 16,
  },
})