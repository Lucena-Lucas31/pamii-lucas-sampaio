import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';
import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs } from 'firebase/firestore';
import { ImageBackground, Image} from "react-native";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAAh_D8xHmXEnxsBKOI3rK-A014jqGdbFE",
  authDomain: "barbieworld-37993.firebaseapp.com",
  projectId: "barbieworld-37993",
  storageBucket: "barbieworld-37993.appspot.com",
  messagingSenderId: "557626257683",
  appId: "1:557626257683:web:d0d79048b719da9655aae6"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const App = () => {
  const [nomePokemon, setNomePokemon] = useState('');
  const [dadosPokemon, setDadosPokemon] = useState([]);

  const testFirestoreConnection = async () => {
    try {
      if (nomePokemon.trim() === '') {
        console.error('Pokemon sem nome não existe patrão');
        return;
      }

      const docRef = await addDoc(collection(db, 'Pokemon'), {
        nome: nomePokemon,
      });
      console.log('Documento adicionado com ID:', docRef.id);

      // Limpa o campo após a gravação
      setNomePokemon('');
    } catch (error) {
      console.error('Erro ao adicionar documento:', error);
    }
  };

  const lerDadosPokemon = async () => {
    try {

      const querySnapshot = await getDocs(collection(db, 'Pokemon'));
      const dados = [];
      querySnapshot.forEach((doc) => {
        dados.push({ id: doc.id, ...doc.data() });
      });
      setDadosPokemon(dados);
    } catch (error) {
      console.error('Erro ao ler dados da coleção "Pokemon":', error);
    }
  };

  return (

<ImageBackground source={require('./assets/Pokedex.png')}
     style={styles.imageBackground}>

      <Text style={styles.title}>CAPTURE UM POKEMON!</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome do pk capturado"
        value={nomePokemon}
        onChangeText={(text) => setNomePokemon(text)}
      />
      
      <View style={styles.btnCP}>
      <Button  title="Capturar Pokemon" onPress={testFirestoreConnection} />
      </View>

      <Text>{'\n'}</Text>

      <View style={styles.btnVP}>
      <Button style={styles.btnVP} title="Ver Pokemons Capturados" onPress={lerDadosPokemon} />
      </View>

      <Text style={styles.subtitle}>Pokemons capturados:</Text>
      <View>
        {dadosPokemon.map((Pokemon) => (
          <Text key={Pokemon.id} style={styles.userText}>{Pokemon.nome}</Text>
        ))}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
 
  title: {
    position: 'absolute',
    top: 120,
    left: 23,
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },

  btnCP: {
    position: 'absolute',
    top: 220,
    left: 55,
    padding: 16
  },

  btnVP: {
    position: 'absolute',
    top: 260,
    left: 30,
    padding: 16
  },

  subtitle: {
    position: 'absolute',
    top: 110,
    left: 350,
    padding: 16,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16
  },

  input: {
    position: 'absolute',
    top: 175,
    left: 60,
    padding: 16,

    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    textAlign: 'center', 
    color: '#000', 
  },
  imageBackground: {
    position: 'absolute',
    top: 50,
    left: 40,
    width: 600,
    height: 400,
    flex: 1,
    resizeMode: "cover",
  },
  userText: {
    top: 150,
    left: 365,
    padding: 1,

    fontSize: 16,
    marginBottom: 2,
  },
});

export default App;
