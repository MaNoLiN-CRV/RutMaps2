import { View, Text, Image, Switch, Pressable } from 'react-native';
import React from 'react';
import { homeScreenStyles } from '../style/styles';
import { darkTheme, lightTheme, toggleTheme } from '../context/slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme.theme);
  const styles = homeScreenStyles(theme);
  const dispatch = useDispatch();

  const setIsDarkMode = (value: boolean) => {
    console.log('setIsDarkMode - Current theme:', value ? 'Dark' : 'Light');
    dispatch(toggleTheme());
  };

  const isDarkMode = theme.background === darkTheme.background;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'http://www.nosferadio.dk/wp-content/uploads/2011/07/back-to-the-future.jpg',
        }}
      />
      <Text style={styles.text}>Welcome to RutMaps 2</Text>
      <View style={styles.switchContainer}>
        <Switch
          value={isDarkMode}
          onValueChange={setIsDarkMode}
          trackColor={{ false: '#4f83cc', true: '#4f83cc' }}
          thumbColor={isDarkMode ? '#333' : '#ddd'}
        />
        <Text style={{
          color: isDarkMode ? '#fff' : '#000',
          textAlign: 'center',
          marginLeft: 10
        }}>
          {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: '#4f83cc',
          padding: 10,
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('Continent')}
      >
        <Text style={{ color: '#fff' }}>Ir a Continentes</Text>
      </Pressable>
      <Text style={styles.creditText}>Artesano version</Text>
    </View>
  );
}

