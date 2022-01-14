import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [message, setMessage] = useState('')
  const calculateBMI = () =>{

    let bmi = (weight / Math.pow((height/100),2)).toFixed(1)
    let message = ""
    if (bmi < 18){
      message = "underweight. Eat some more!!!"
    }
    else if (bmi < 25){
      message = "normal. Must be nice~."
    }
    else if ( bmi < 30){
      message = "overweight. Diet a litte!!!"
    }
    else {
      message = "obese. Hit the gym!!!"
    }
    setMessage("Your BMI is " + bmi + ". You are " + message)
}
  
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>BMI Calculator</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png',
        }}
      />
       <TextInput
        style={styles.input}
        onChangeText={text=> setHeight(text)}
        value={height}
        placeholder="Enter your height (cm)"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input}
        onChangeText={text=> setWeight(text)}
        value={weight}
        placeholder="Enter your weight (kg)"
        keyboardType="numeric"
      />
      <Text style={{marginBottom:10}}>{message}</Text>
<TouchableOpacity style={styles.button} onPress={calculateBMI}>
      <Text>Calculate BMI</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
  tinyLogo: {
    width: 80,
    height: 80,
  },
  headerText: {
    fontSize: 25,
    color:'blue',
    margin: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 150,
  },
});
