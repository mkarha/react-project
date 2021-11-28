<<<<<<< HEAD
// Importing components from React 
import React, {useState} from 'react';
import { 
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Keyboard, 
  ScrollView,
  Image,
} from 'react-native';
import Task from '../Components/Task';
import {
  ImageBackground,
} from 'react-native'
// Setting up the function for creating tasks


export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }
// Used creative commons images as our backdrop...
  return (
      <ImageBackground
        style={styles.container}  
        source={require('../../Image/aboutus.png')}
             
        
      >
    
      {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >
=======
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const image = { uri: "../../Image/aboutus.png" };
>>>>>>> 4359ad57392f64c262a4e5f2ad25ad48f3d9890d

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Pillua</Text>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    //backgroundColor: '#E8EAED',
    //justifyContent: 'center',
    //alignItems: 'center',
    resizeMode: 'cover',
=======
>>>>>>> 4359ad57392f64c262a4e5f2ad25ad48f3d9890d
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
<<<<<<< HEAD
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    //fontSize: 25,
    fontWeight: '700',
    //backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: -30,
    
=======
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
>>>>>>> 4359ad57392f64c262a4e5f2ad25ad48f3d9890d

export default App;