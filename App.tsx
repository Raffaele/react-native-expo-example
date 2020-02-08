import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Autocomplete } from 'react-native-autocomplete-input';
import MapView from 'react-native-maps';
import MapComponent from './components/MapComponent/MapComponent';

// import { get } from './engine/apiRequest';

type StateType = {
  apiResponse :string,
  restaurants :Array<any>,
  x :number,
  y: number
};

interface ICoords {
  latitude :number;
  longitude: number;
};

export default function App() {
  const [ state, setState ] = useState<StateType>({
    apiResponse: '',
    restaurants: [],
    x: 0,
    y: 0
  });

  // function updateRestaurantByName(name :string = '') {
  //   get('restaurants.json', {name}).then(response => {
  //     setState({
  //       ...state,
  //       apiResponse: JSON.stringify(response)
  //     });
  //   }, error => {
  //     console.log(error);
  //     setState({
  //       ...state,
  //       apiResponse: 'error'
  //     });
  //   });
  // }
  useEffect(() => {
    // updateRestaurantByName();
    navigator.geolocation.getCurrentPosition((position) => {
      const coords :ICoords = position.coords;
      const { latitude, longitude } = coords;
      console.log('location', { latitude, longitude });
      setState({
        ...state,
        x: latitude,
        y: longitude
      });
      console.log('loaded');
      setTimeout(() => {
        console.log('state', state);
      }, 1000);
    }, () => {});
    return () => true;
  }, []);

  function selectRestaurant(element) :void {
    // console.log(element);
  }

  function changeAutocompleteText(element :any) :void {
    // console.log(element);
  }

  function onRegionChange(newPosition) {
    // console.log(newPosition);
  }
  
  return (
    <View style={styles.container}>
      {/* <Autocomplete data={state.restaurants}
        defaultValue="hello"
        onChangeText={text => changeAutocompleteText({ query: text })}
      
        renderItem={({ item, i }) => (
          <TouchableOpacity onPress={() => selectRestaurant({ query: item })}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )} /> */}
      {/* <Text>Open up App.tsx to start working on your app!</Text>
      <Text>{state.apiResponse}</Text> */}
      {/* <Text>{state.latitude} X {state.longitude}</Text> */}
      {/* <MapComponent /> */}
      {console.log(state)}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: state.x,
          longitude: state.y,
          latitudeDelta: 0.9,
          longitudeDelta: 0.4,
        }}
        onRegionChange={onRegionChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});
