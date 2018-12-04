import * as React from 'react';
import { View, 
        Text, 
        StyleSheet, 
        ScrollView, 
        TouchableOpacity  } from 'react-native';
import { Button,
         Appbar } from 'react-native-paper';

import styles from '../styles';
import Input from "./Input"
import { fromJS } from 'immutable';

class Home extends React.Component {
  
    render() {
      return (
        <View> 
         <Appbar style={styles1.bottom}>
        
            <Appbar.Action icon="map" onPress={()=>{ navigation.navigate('Map')}} />
             <Appbar.Action icon={`favorite`} onPress={() => console.log('Pressed mail')} />
             {/* <Appbar.Action icon="label" onPress={() => console.log('Pressed label')} />
             <Appbar.Action icon="delete" onPress={() => console.log('Pressed delete')} /> */}
          </Appbar>
          <Input/>
          <ScrollView>

         </ScrollView>
     </View>    
      );
    }
  }

  export default Home

  
  const styles1 = StyleSheet.create({
    bottom: {
        display:"flex",
        justifyContent: "space-around"

    },
    scroll: {
        marginTop:0,
        display:"flex",
        
    }
  });

//   export default Home;

