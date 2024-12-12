import { FlatList, View, Text } from 'react-native';
import React, { useEffect } from 'react';
import ContinentComponent from '../components/ContinentComponent';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootState } from '../context/store/store';
import { Region } from '../entities/continents';
import { useGetCountryByRegionQuery } from '../api/api';
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

