import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

const image = "../../Image/aboutus.png";

const App = () => (
  <View style={styles.container}>
    <Image 
    source={require("../../Image/aboutus.png")} 
    style={styles.image} />
      <Text style={styles.text}>mikko.karhavirta@student.laurea.fi</Text>
      <Text style={styles.text}>marko.laaksonen@student.laurea.fi</Text>
      <Image 
        source={require("../../Image/laurea.png")} 
        style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  image: {
    flex: 1,  
    marginTop: 10, 
    marginBottom: 60,
    justifyContent: "center",
    resizeMode: "contain",

  },
  text: {
    color: "black",
    fontSize: 15,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    //backgroundColor: "#000000c0",
  }
});

export default App;