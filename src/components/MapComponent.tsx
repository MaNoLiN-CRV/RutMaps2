import React from 'react'
import { AnimationType,LeafletView,} from 'react-native-leaflet-view';
import Coords from '../entities/coords';

/**
 * A component that displays a map with a single marker at the given location
 * @param location The location to render the marker at, as a Coords object
 * @returns A LeafletView component with a single marker at the given location
 */
export default function MapComponent(location : Coords) {
  return (
    <LeafletView 
      
      mapMarkers={[
        {
          animation: {type: AnimationType.WAGGLE},
          position: location,
          icon: '📍',
          size: [32, 32],
          
        }
      ]}
      mapCenterPosition={location}
    />
);
}