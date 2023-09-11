import { Text, View, StyleSheet, } from 'react-native';

import React from "react";
import { Center, Image, NativeBaseProvider, Input, Box, Button } from "native-base";



function Fundo() {
  return <Center>

  <Image position={"absolute"} source={require('./assets/Fundo.png')} 
  style={styles.imageBackground}
  />

    </Center>;
}

const EmailTxt = () => {
  return <Box position={"absolute"}  w="80%" style={styles.BoxET}>
    <Text style={styles.emailText}> Email: </Text>
    </Box>
};


const EmailCamp = () => {
  return <Box alignItems="center" position={"absolute"} style={styles.BoxE} w="80%">
      <Input mx="10" placeholder="" w="100%"  variant="unstyled" style={styles.input}/>
    </Box>
};

const SenhaTxt = () => {
  return <Box position={"absolute"} style={styles.BoxST} w="80%" >
    <Text style={styles.senhaText}> Senha: </Text>
    </Box>
};


const SenhaCamp = () => {
  return <Box alignItems="center" position={"absolute"} style={styles.BoxS} w="80%">
    
    <Box>
      <Input mx="10" placeholder="" w="100%"  variant="unstyled" style={styles.input}/>
    </Box>    

          <Box position={"absolute"} style={styles.boxButton}>
             <Button w= "100%" style={styles.button}>
                  <Text style={styles.envio}>Enviar</Text>
             </Button>  
          </Box>

    </Box>
};


  




export default () => {
        return (
          <NativeBaseProvider>
            <Center>  

                <Fundo />

                <EmailTxt />

                <EmailCamp />

                <SenhaTxt />

                <SenhaCamp />

                

            </Center>

                
              
            
          </NativeBaseProvider>
        );
    };

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: "column"
  },

  emailText: {
    fontSize: 19,
    color: '#8E0033',
    marginBottom: 10,
    marginLeft: 10,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },

  button: {
    
    top: 10,
    height: 60,
    
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
    fontSize: 30,
    fontFamily: 'Roboto',
    

  },
  
  senhaText: {

    fontSize: 19,
    color: '#8E0033',
    marginTop: 18,
    marginBottom: 10,
    marginLeft: 10,

    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.4,
    shadowRadius: 3,
  },
  
  input: {
    
    // position: "absolute",
    // top: 60,
    // left: 60,
    
    
    height: 50,
    
    padding: 10,
    borderColor: '#FF005C',
    
    borderRadius: 30,
    
    fontSize: 20,

    
    
   
  },
   BoxE: {

    top: 455,

    borderRadius: 20,
    
    borderWidth: 2,
    borderColor: '#FF005C',
    backgroundColor: 'rgba(241, 184, 205, 0.5)',
   
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  
  BoxET: {

    top: 420,

  },

  BoxS: {

    top: 580,

    borderRadius: 20,
    
    borderWidth: 2,
    borderColor: '#FF005C',
    backgroundColor: 'rgba(241, 184, 205, 0.5)',
   
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  BoxST: {

    top: 525,

  },

  boxButton: {

    top: 60,
  },

  imageBackground: {
    top: 0,
    height: 900,
    resizeMode: "cover",
  }
  
 });
