import { View, Text, Image, Pressable } from 'react-native';
import React from 'react';
import { homeScreenStyles } from '../style/styles';
import { darkTheme, lightTheme, toggleTheme } from '../context/slices/themeSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function HomeScreen({ navigation }: any) {
  const theme = useSelector((state: any) => state.theme.theme);
  const styles = homeScreenStyles(theme);
  const dispatch = useDispatch();

  const setIsDarkMode = () => {
    console.log('setIsDarkMode - Current theme:', theme === darkTheme ? 'Dark' : 'Light');
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
      <Text style={styles.text}>Bienvenido a ManelMaps</Text>
      <View style={styles.switchContainer}>
        <Pressable
          onPress={setIsDarkMode}
          style={({ pressed }) => [
            {
              backgroundColor: isDarkMode ? '#333' : '#ddd',
              padding: 10,
              borderRadius: 10,
              opacity: pressed ? 0.5 : 1,
            }
          ]}
        >
          <Text style={{
            color: isDarkMode ? '#fff' : '#000',
            textAlign: 'center'
          }}>
            {isDarkMode ? 'Modo Oscuro' : 'Modo Claro'}
          </Text>
        </Pressable>
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
    </View>
  );
}
