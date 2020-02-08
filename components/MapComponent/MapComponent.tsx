import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';

import { get } from './engine/apiRequest';

type PropsType = {
  lat :number,
  lon :number,
  raw :number
};

export default function MapComponent<PropsType>({ lat, lon, raw }) {
  return (
    <View style={styles.container}>
      <MapView
        style={mapStyle.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

const mapStyle = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
