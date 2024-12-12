import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { homeScreenStyles } from '../components/styles'

export default function HomeScreen( { navigation } : any ) {
  return (
    <View style={homeScreenStyles.container}>
      <Image style={homeScreenStyles.image} source={{uri: 'http://www.nosferadio.dk/wp-content/uploads/2011/07/back-to-the-future.jpg'}} />
      <Text style={{fontSize: 24, marginBottom: 20}}>Bienvenido a ManelMaps</Text>
      <Pressable style={{backgroundColor: '#4f83cc', padding: 10, borderRadius: 10}} onPress={() => navigation.navigate('Continent')}>
        <Text style={{color: '#fff'}}>Ir a Continentes</Text>
      </Pressable>
    </View>
  )
}
