import React, { useState, Component, Networking } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Linking, TouchableWithoutFeedback } from 'react-native';

export default function App() {
  const [enteredURL, setURL] = useState(''); 
  const mainURL = ('');
  const commandUP = ('/w');
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
      method: 'GET'
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
    <View style={{padding: 100}}>
      
      <View>
        <TextInput placeholder = "Enter IP Address"
        style ={{ 
        borderColor:'grey', borderWidth:0.1, 
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
        <View style = {{padding: 30, margin: 20, backgroundColor: 'purple', alignItems: 'center'}}>
           <Text style = {{color: 'white'}}>FORWARD</Text>
        </View>
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback 
        onPressIn= {moveLEFT}
        onPressOut = {moveSTOP}>
          <View style = {{width: 300, height: 50, margin: 20, backgroundColor: 'purple', alignItems: 'center'}}>
           <Text>LEFT</Text>
          </View> 
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback 
        onPressIn= {moveRIGHT}
        onPressOut = {moveSTOP}>
          <View style = {{width: 300, height: 50, margin: 20, backgroundColor: 'purple', alignItems: 'center'}}>
           <Text>RIGHT</Text>
          </View> 
        </TouchableWithoutFeedback>
      </View>
      <View>
        <TouchableWithoutFeedback 
        onPressIn= {moveBACK}
        onPressOut = {moveSTOP}>
          <View style = {{width: 300, height: 50, margin: 20, backgroundColor: 'purple', alignItems: 'center'}}>
           <Text>REVERSE</Text>
          </View> 
        </TouchableWithoutFeedback>
      </View>
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
