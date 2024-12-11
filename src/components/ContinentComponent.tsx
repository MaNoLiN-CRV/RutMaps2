import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet,TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather'
import Continent from '../entities/continent'
import { ContinentEnum } from '../entities/continents'


export default function ContinentComponent(continent : Continent) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon name="map-pin" size={24} color="black" />
      </View>
      <Text style={styles.text}>{continent.name}</Text>
    </TouchableOpacity>
  )
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
