import React, { useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, View} from 'react-native'
import Coords from '../entities/coords';
import {WebView} from 'react-native-webview';
/**
 * A component that displays a map with a single marker at the given location
 * @param location The location to render the marker at, as a Coords object
 * @returns A WebView component pointing to a Google Maps URL with a single marker at the given location
 */

type Props = {
  map: string
}
export default function MapComponent({ map }: Props) {
  console.log(map);
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: map }}
        style={styles.webview}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        startInLoadingState={true}
        scalesPageToFit={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
  },
});
