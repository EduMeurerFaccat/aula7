import React,{useState} from "react";
import {View,Image,Text,StyleSheet,TextInput} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

const Home= () => {
    const [numero,setNumero] = useState('0');


    return (
        //é o que vai ser redenrizado

       <View style={styles.container}>
         
         <Image style={styles.tinyLogo} source={require("../aula7/img/img1.jpg")}/>
         <Text style={styles.title}>Bem vindo ao E-ticket</Text>
         <Text style={styles.longText}>
           Veniam duis reprehenderit anim ut in Lorem est reprehenderit nisi ipsum laboris elit. Cillum ea tempor nostrud eu adipisicing duis Lorem adipisicing non. Incididunt non tempor in incididunt sunt eu ad minim. Commodo proident nostrud dolore magna cillum veniam et sunt. Sint commodo minim in aute dolore mollit minim aliquip exercitation dolore non excepteur ea ex. Lorem exercitation consectetur sunt eu. Mollit incididunt cupidatat eu dolore dolore nulla duis laboris ullamco occaecat.
         </Text>
         <Image style={styles.logo} source={require('../aula7/img/img2.jpg')}/>
         <View style={styles.buttonsView}>
           <TouchableOpacity style={styles.buttonDefault}>
              <Text>Eventos</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonDefault}>
              <Text>Contato</Text>
           </TouchableOpacity>
           <TouchableOpacity style={styles.buttonDefault}>
              <Text>News</Text>
           </TouchableOpacity>
         </View>
       </View>

    );

    };

    const styles = StyleSheet.create({
        container: {
          flex:1,
          paddingTop: 50,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column"
        },
        buttonDefault:{
          margin: 10,
          backgroundColor: "#000",
          width: 100,
          flex: 1,
          maxHeight: 30,
          color: "#FFFFFF"
        },
        tinyLogo: {
          flex: 1,
          width: 150,
          resizeMode: "contain",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center"
        },
        logo: {
          display: "flex",
          flex: 3,
          width: 250,
          resizeMode: "contain",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start"
        },
        longText: {
          flex:1,
          padding: 10,
          textAlign: "justify"
        },
        title: {
          fontWeight: "bold",
          fontSize: 16,
          flex: 1 
        },
        buttonsView: {
          flex: 1,
          flexDirection: 'row',
          justifyContent: "center"
        }
    });

export default Home;