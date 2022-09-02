import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, Image} from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  

  const buttonPressedPlus = () => { 
     Alert.alert('Result: ' + (parseInt(number1) + parseInt(number2))); 
     setNumber1(0);
     setNumber2(0);
    
  };
  const buttonPressedMinus = () => { 
    
    Alert.alert('Result: ' + (parseInt(number1) - parseInt(number2))); 
    setNumber1(0);
    setNumber2(0);
    
  };
  return (
    
    <View style={styles.container}>
        <Image style={styles.image} source={{uri: 'https://www.sttinfo.fi/data/images/00304/be7db042-6b61-49f9-9bcd-7fd41b7bc35d.jpg'}} />
        <TextInput placeholder='Anna numero1' keyboardType="numeric" style={styles.input} onChangeText={number1 => setNumber1(number1)} value={number1}/>
        <TextInput placeholder='Anna numero2' keyboardType="numeric" style={styles.input} onChangeText={number2 => setNumber2(number2)} value={number2}/>
      <View style={styles.button2}>
          <View style={styles.button}>
             <Button onPress={buttonPressedPlus} title="+" />
          </View>
          <View style={styles.button}>
            <Button onPress={buttonPressedMinus} title="-" />
          </View>
      </View>
          
        <StatusBar style="auto" />
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    margin:10,
   
    },
    button2: {
      flexDirection:'row',
      justifyContent: 'space-evenly',
      
      },
  image : {
    marginTop:30,
    marginBottom:30,
    width: 250,
    height: 100
  },
  input : {
    width:'50%'  , 
    borderColor: 'gray', 
    borderWidth: 1,
    borderRadius:10,
    padding: 5,
    margin:10,
  }
});
