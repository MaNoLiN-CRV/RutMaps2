import { View, Text, Pressable } from 'react-native'
import React from 'react'

export default function HomeScreen( { navigation } : any) {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Pressable onPress={() => navigation.navigate('Continent')}/>
    </View>
  )
}