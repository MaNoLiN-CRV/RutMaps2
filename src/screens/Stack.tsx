import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './HomeScreen';
import CountryScreen from './CountryScreen';
import ContinentScreen from './ContinentScreen';
import CountryDetails from './CountryDetails';
import Country from '../entities/country';
import { Region } from '../entities/continents';


export type RootStackParamList = {
  Home: undefined; 
  Continent: undefined;
  Country: { countries: Country[] }; 
  CountryDetails: { country: Country }; 
};


const Stack = createNativeStackNavigator<RootStackParamList>();

/**
 * The main app navigator. It provides a stack navigation between the Home, Continent, Country and CountryDetails screens.
 * @returns A JSX element representing the app navigator.
 */
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Home' }} 
      />
      <Stack.Screen 
        name="Continent" 
        component={ContinentScreen} 
        options={{ title: 'Continent' }}
      />
      <Stack.Screen 
        name="Country" 
        component={CountryScreen} 
        options={{ title: 'Countries' }}
      />
      <Stack.Screen 
        name="CountryDetails" 
        component={CountryDetails} 
        options={{ title: 'Country Details' }}
      />
    </Stack.Navigator>
  );
}

