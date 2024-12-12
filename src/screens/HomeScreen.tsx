import { View, Text, Image, Pressable, Switch } from 'react-native'
import React, { useState } from 'react'
import { homeScreenStyles } from '../style/styles'
import { toggleTheme } from '../context/slices/themeSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function HomeScreen( { navigation } : any ) {

  const theme = useSelector((state: any) => state.theme.theme);
  

  const styles = homeScreenStyles(theme);

  const dispatch = useDispatch()
  const setIsDarkMode = () => {
    dispatch(toggleTheme());
  };
 const isDarkMode = theme === 'dark';

  return (
    <View style={styles.container }>
      <Image style={styles.image} source={{uri: 'http://www.nosferadio.dk/wp-content/uploads/2011/07/back-to-the-future.jpg'}} />
      <Text> Bienvenido a ManelMaps</Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        <Text style={{color: isDarkMode ? '#fff' : '#333'}}>Modo Oscuro</Text>
      </View>
      <Pressable style={{backgroundColor: '#4f83cc', padding: 10, borderRadius: 10}} onPress={() => navigation.navigate('Continent')}>
        <Text style={{color: isDarkMode ? '#fff' : '#333'}}>Ir a Continentes</Text>
      </Pressable>
    </View>
  )
}

