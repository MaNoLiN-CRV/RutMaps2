import { View, Text, Pressable, Button } from 'react-native'
import React from 'react'


export default function HomeScreen( { navigation } : any ) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title={"Continent"} onPress={() => navigation.navigate('Continent')} />
    </View>
  )
}