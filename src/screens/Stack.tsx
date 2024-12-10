import { createStackNavigator } from "@react-navigation/stack";
export const Stack = createStackNavigator();
import React from 'react'
import HomeScreen from "./HomeScreen";
import CountryScreen from "./CountryScreen";
import ContinentScreen from "./ContinentScreen";
import CountryDetails from "./CountryDetails";
/**
 * A stack navigator with routes to Home, Continent, Country, and CountryDetails
 */
export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Continent" component={ContinentScreen} />
      <Stack.Screen name="Country" component={CountryScreen} />
      <Stack.Screen name="CountryDetails" component={CountryDetails} />
    </Stack.Navigator>
  )
}