import { router } from "expo-router";
import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";

const imageLachute = require("../assets/images/lachute.jpg");

export default function Acceuil() {
  return (
    <View >
        <ImageBackground source={imageLachute} style={styles.image}>
          <Text style={styles.title}>La chute</Text>
          <Pressable onPress={() => router.push("/recherche")}>
            <Text style={styles.button}>Recherche</Text>
          </Pressable>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create(
  {
    image :{
      flex:1,
      alignItems:"center",
      justifyContent:"space-around"
    },

    title : {
      fontSize : 80,
      fontStyle : "italic",
      textAlign : "center"
      
    },

    button :{
      padding : 10,
      margin : "auto",
      fontSize : 20,
      backgroundColor : "lightgreen",
      borderRadius : 10,
      textAlign : "center"
      
    }

  }
)