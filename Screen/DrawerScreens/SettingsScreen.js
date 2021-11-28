import React from "react";
import { ImageBackground, StyleSheet, Text, View, Image } from "react-native";

const image = "../../Image/aboutus.png";

const App = () => (
  <View style={styles.container}>
    <Image 
    source={require("../../Image/aboutus.png")} 
    style={styles.image} />
      <Text style={styles.text}>Pillua</Text>
    
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  image: {
    flex: 0.5,  
    marginTop: 100, 
    marginBottom: 100,
    justifyContent: "center",
    resizeMode: "contain",

  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  }
});

export default App;