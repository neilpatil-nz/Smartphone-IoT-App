import React, { useState, Component, Networking} from 'react';
import { StyleSheet, Text, View, Button, TextInput, Linking, Switch, TouchableWithoutFeedback } from 'react-native';
import { Header } from 'react-native-elements';



export default function App() {
  const [enteredURL, setURL] = useState(''); 
  const mainURL = ('');
  const commandUP = ('/forward');
  const commandLEFT = ('/left');
  const commandBACK = ('/reverse');
  const commandRIGHT = ('/right');
  const commandSTOP = ('/stop');
  const HandlerURL = (enteredURL) => {
    setURL(enteredURL);
  };
  const addURL = () => {
    enteredURL;
  };
  const moveUP = () => {
    const commandHandler = 'http://' + enteredURL + commandUP;
    console.log(commandHandler);
    fetch(commandHandler, {
      method: 'POST'
    });
  };
  const moveLEFT = () => {
    const commandHandler = 'http://' + enteredURL + commandLEFT;
    console.log(commandHandler);
    fetch(commandHandler, {
      method: 'GET'
    });   
  };
  const moveBACK = () => {
    const commandHandler = 'http://' + enteredURL + commandBACK;
    console.log(commandHandler);
    fetch(commandHandler, {
      method: 'GET'
    });   
  };
  const moveRIGHT = () => {
    const commandHandler = 'http://' + enteredURL + commandRIGHT;
    console.log(commandHandler);
    fetch(commandHandler, {
      method: 'GET'
    });   
  };
  const moveSTOP = () => {
    const commandHandler = 'http://' + enteredURL + commandSTOP;
    console.log(commandHandler);
    fetch(commandHandler, {
      method: 'GET'
    });   
  };
  

  return (
    
    <View>
     <Header
      
      centerComponent={{ text: 'Car Controller', style: { color: '#fff', fontSize: 20 } }}
      
      
    />
      <View style ={{ padding: 100 }}>
        <TextInput placeholder = "Enter IP Address"
        style ={{ 
        borderColor:'grey', borderWidth:0.1, marginBottom: 15, 
        borderRadius:4, height:40, fontSize: 20, padding: 5}}
        onChangeText = {HandlerURL}
        value = {enteredURL}
        
        />
        <Button title='CONNECT' 
        onPress={addURL} 
        />
      </View>
      <View>
        <TouchableWithoutFeedback 
        onPressIn={moveUP}
        onPressOut = {moveSTOP}
        >
         <View style={[styles.triangle]} />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback 
        onPressIn= {moveLEFT}
        onPressOut = {moveSTOP}>
          <View style={[styles.triangleLeft]} />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback 
        onPressIn= {moveRIGHT}
        onPressOut = {moveSTOP}>
          <View style={[styles.triangleRight]} />
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback 
        onPressIn= {moveBACK}
        onPressOut = {moveSTOP}>
          <View style={[styles.triangleDown]} />
        </TouchableWithoutFeedback>
      </View>
      <View  
      style ={{ position:'absolute',
      marginTop: 700,
      alignSelf: 'center'

      }}>
        
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  triangle: {
    position: 'absolute',
    width: 0,
    height: 0,
    
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black'
  },
  triangleLeft: {
    position: 'absolute',
    marginTop: 70,
    left:100,
    width: 0,
    height: 0,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    transform: [
      {rotate: '-90deg'}
    ],
  },
  triangleRight: {
    position: 'absolute',
    width: 0,
    marginTop: 70,
    right: 100,
    height: 0,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    transform: [
      {rotate: '90deg'}
    ],
  },
  triangleDown: {
    position: 'absolute',
    width: 0,
    marginTop: 150,
    
    height: 0,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 30,
    borderRightWidth: 30,
    borderBottomWidth: 60,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'black',
    transform: [
      {rotate: '180deg'}
    ],
  },
});

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
