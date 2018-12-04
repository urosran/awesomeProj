import {Component} from 'react-native';
import { Button, Card, Title, Paragraph, TextInput, Appbar } from 'react-native-paper';
import styles from '../styles';
import React from 'react';
import { View, Text, AsyncStorage, FlatList, List } from 'react-native';
import { fromJS } from 'immutable';
import { ScrollView } from 'react-native-gesture-handler';
import WhereAmI from './whereAmI';


// import styles from './styles';
var people = []            
var person = {name:"",
                surname:""} 
class Input extends React.Component{
    state = {
        data: fromJS({
          key: null,
          value: null,
          source: []
        })
      };
    
      get data() {
        return this.state.data;
      }

      set data(data) {
        this.setState({ data });
      }

    setItem = () =>
        AsyncStorage.setItem(this.data.get('key'), this.data.get('value'))
        .then(() => {
        this.data = this.data.delete('key').delete('value');
        })
        .then(() => this.loadItems());

    // items to clear the item list on the screen.
    clearItems = () =>
        AsyncStorage.clear().then(() => this.loadItems());

    async loadItems() {
        const keys = await AsyncStorage.getAllKeys();
        const values = await AsyncStorage.multiGet(keys);
    
        this.data = this.data.set('source', fromJS(values));
        }
        
    componentDidMount() {
        this.loadItems();
    }


    render(){
        const { source, key, value } = this.data.toJS();

        return(
        <View>  
            <Card>
                <Card.Content>
                    <Title>Add a friend</Title>
                <TextInput
                        label='Name'
                        value={key}
                        onChangeText={v => {
                            this.data = this.data.set('key', v);
                          }}
                />
                
                <TextInput
                    label='Surname'
                    value={value}
                    onChangeText={v => {this.data = this.data.set('value', v);}}
                />
                
                <WhereAmI/>

                </Card.Content>
                
                
                <Card.Actions>
                    <Button label="Add" onPress={this.setItem}>Ok</Button>
                    <Button onPress={console.log("FUCK OFF")}>Cancel</Button>
                </Card.Actions>
            </Card>
            <View style={styles.list}>
                    <FlatList                
                        data={source.map(([key, value]) => ({
                            key: key.toString(),
                            value
                        }))}
                        renderItem={({ item: { value, key } }) => (

                         <Text> 
                            Name:  {key} {"\n"}
                            Last Name: {value}
                         </Text> 
                        //  <Text> z:  {value} </Text> 
                        
                        
                        
                        )}
                     /> 
            </View>
         </View>
        )
    };
}

export default Input;


            {/* <Card.Cover source={{ uri: 'https://picsum.photos/700' }} /> */}
