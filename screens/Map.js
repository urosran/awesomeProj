import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';
import WhereAmI from './whereAmI'
// import styles from '../styles';
import MapView from 'react-native-maps';
import Marker from './Marker'
  

export default ({ navigation }) => (
    <View style={styles.container}>
        <MapView
        style={styles.map}
        showsPointsOfInterest={true}
        showsUserLocation={true}
        followUserLocation={true}
        showsMyLocationButton={true}
        />
    
    {/* <WhereAmI/>
    <Marker/> */}
   <Text>xx</Text>
  </View>
);

Map.navigationOptions = ({ navigation }) => ({
    title: "Map",
  });

  const styles = StyleSheet.create ({
    map: {
       height: 300,
       marginTop: 0
    }
 })