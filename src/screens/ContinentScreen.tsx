import { FlatList, View, Text } from 'react-native';
import React from 'react';
import ContinentComponent from '../components/ContinentComponent';
import { Region } from '../entities/continents';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Stack';
type Props = NativeStackScreenProps<RootStackParamList, 'Continent'>;
export default function ContinentScreen({ navigation }: Props) {
  return (
    <View>
      <FlatList
        data={Object.values(Region)}
        renderItem={({ item }) => <ContinentComponent navigation={navigation} region={item} />}
        keyExtractor={(item) => item.toString()}
      />
    </View>
  );
}

