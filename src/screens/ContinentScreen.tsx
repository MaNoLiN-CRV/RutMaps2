import { FlatList, View, Text, StyleSheet } from 'react-native';
import React from 'react';
import ContinentComponent from '../components/ContinentComponent';
import { Region } from '../entities/continents';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Stack';
import { useSelector } from 'react-redux';
import { continentStyles } from '../style/styles';
type Props = NativeStackScreenProps<RootStackParamList, 'Continent'>;



export default function ContinentScreen({ navigation }: Props) {
  const theme = useSelector((state: any) => state.theme.theme);
  const styles = continentStyles(theme);
  return (
    <View style={styles.container}>
      <FlatList
        data={Object.values(Region)}
        renderItem={({ item }) => <ContinentComponent navigation={navigation} region={item} />}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
}

