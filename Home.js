import React,{useState} from "react";
import {View,Image,Text,StyleSheet,TextInput} from 'react-native';

const Home= () => {
    const [numero,setNumero] = useState('0');


    return (
        //é o que vai ser redenrizado

        <View>
            <Text>Meu primeiro componente</Text>
            <Image    
              style={styles.tinyLogo}
              source={{
               uri: 'https://reactnative.dev/img/tiny_logo.png',
             }}
            />
           
             <TextInput 
                style={styles.input}
                onChangeText={numero=>setNumero(numero)}
                value={numero}
                selectTextOnFocus={true}
                keyboardType='numeric'
             />

             
        </View>

    );

    };

    const styles = StyleSheet.create({
        container: {
          paddingTop: 50,
        },
        tinyLogo: {
          width: 50,
          height: 50,
        },
        logo: {
          width: 66,
          height: 58,
        },
        input: {
            height: 40,
            
            borderWidth: 1
           
          },
      });
export default Home;