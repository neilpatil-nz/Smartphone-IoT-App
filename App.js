import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 100}}>
      <View>
        <TextInput placeholder = "Enter IP Address"
        style ={{ 
        borderColor:'grey', borderWidth:0.1, 
        borderRadius:4, height:40, fontSize: 20, padding: 5}}
        
        />
        <Button title='CONNECT'/>
      </View>
      <Text></Text>
      
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
