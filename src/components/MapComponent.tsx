import React, { useEffect, useState } from 'react'
import { SafeAreaView, View} from 'react-native'
import Coords from '../entities/coords';
import {WebView} from 'react-native-webview';
import { mapStyle } from './styles';
/**
 * A component that displays a map with a single marker at the given location
 * @param location The location to render the marker at, as a Coords object
 * @returns A WebView component pointing to a Google Maps URL with a single marker at the given location
 */

type Props = {
  map: string
}
export default function MapComponent({ map }: Props) {
  return (
    <SafeAreaView style={mapStyle.container}>
      <WebView
        source={{ uri: map }}
        style={mapStyle.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </SafeAreaView>
  );
};


