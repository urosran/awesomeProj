import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingTop: 100
  }, 
  button: {
    marginRight: 100,
  },
  mapView: {
    alignSelf: 'stretch',
    height: 250,
    margin: 0,
  },
 

  label: {
    textAlign: 'center',
    margin: 10,
  },

  address: {
    fontWeight: 'bold',
  },
});