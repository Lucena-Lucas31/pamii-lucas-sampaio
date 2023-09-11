import * as React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import { ImageBackground, TextInput, Button, Alert, Pressable } from "react-native";

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import background from "./assets/Fundo.png";

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [text1, onChangeText1] = React.useState('');
  const [text2, onChangeText2] = React.useState('');

  const [number, onChangeNumber] = React.useState('');

  return (

  <View style={styles.container}>

    <ImageBackground source={require('./assets/Fundo.png')}
     style={styles.imageBackground}>

        <Text>
             {"\n"}{"\n"}{"\n"}
             {"\n"}{"\n"}{"\n"}
             {"\n"}{"\n"}{"\n"}
             {"\n"}{"\n"}{"\n"}
             {"\n"}{"\n"}{"\n"}
             {"\n"}{"\n"}{"\n"}
             {"\n"}{"\n"}{"\n"}
             {"\n"}{"\n"}{"\n"}
             
        </Text>

    <Text style={styles.emailText}>

       Email: 
       
    </Text>

      <TextInput
      style={styles.input}
      label="Email"
      value={text1}
      onChangeText={onChangeText1}
    />

    <Text style={styles.senhaText}>

       Senha: 
       
    </Text>

    <TextInput
      style={styles.input}
      label="Senha"
      value={text2}
      onChangeText={onChangeText2}
    />

        <Text>
             {"\n"}
             
        </Text>

    <Pressable 
        style={styles.button}
        title="Enviar"
        onPress={() => Alert.alert('VOCÊ É UMA PRINCESAAAAAAAAAAA')}
      >
      <Text style={styles.envio}>Enviar</Text>


    </Pressable>
    </ImageBackground>



  </View>


)}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column"
  },

  emailText: {
    fontSize: 19,
    color: '#8E0033',
    marginBottom: 10,
    marginLeft: 50,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  button: {
    marginLeft: 70,
    marginRight: 70,
    height: 60,
    padding: 1,
    borderRadius: 20,
    marginTop: 10,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,


    marginBottom: 3,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 1,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor:'#E40B70'

  },

  envio: {
    color: '#FFFFFF',
    fontSize: 40,
    fontFamily: 'Roboto',
    

  },
  
  senhaText: {
    fontSize: 19,
    color: '#8E0033',
    marginTop: 18,
    marginBottom: 10,
    marginLeft: 50,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  
  input: {
    marginLeft: 30,
    marginRight: 30,
    height: 60,
    borderWidth: 2,
    padding: 10,
    borderColor: '#FF005C',
    backgroundColor: 'rgba(241, 184, 205, 0.5)',
    borderRadius: 20,

    fontSize: 20,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  
});