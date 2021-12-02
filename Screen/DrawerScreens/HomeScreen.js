import React, {useState, useEffect} from 'react';
import { 
  KeyboardAvoidingView, 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Keyboard, 
  ScrollView,
  Button,
} from 'react-native';
import Task from '../Components/Task';
import {
  ImageBackground,
} from 'react-native';

import db from '../../firebase';
import firebase from 'firebase';
import { auth } from '../../firebase';

export default function App() {

  const [task, setTask] = useState('')
  const [taskItems, setTaskItems] = useState([]);

  useEffect(() => {
    var em = auth.currentUser?.email;
		db.collection(auth.currentUser?.email).onSnapshot(snapshot => {
				setTaskItems(snapshot.docs.map(doc => doc.data().Todo))
		})
	}, []);
  
  const addTodo = () => {
    if(setTask.length>0){
    console.log(task)
    var todo = task
    db
    .collection(auth.currentUser?.email)
    .add({
      Todo: todo,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }
  
    setTaskItems([...taskItems, task]);
		setTask();
  }


  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
    var i = 0
    var id
    db.collection(auth.currentUser?.email).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
          console.log(doc.id, " => ", doc.data());
          if (i == index) {
            db.collection(auth.currentUser?.email).doc(doc.id).delete()
          }
          i++
      });
  });
  
  }

    return (
       
        <ImageBackground
          style={styles.container}
          source={require('../../Image/elephant.png')}  
        >

          {/* Added this scroll view to enable scrolling when list gets longer than the page */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Welcome to Todo!</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! */}
          {
            taskItems.map((task, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={task} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>
            
            <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
            <View style={styles.inputContainer}> 
           
            
                <TextInput
                    placeholder="Task"
                    value={task}
                    onChangeText={text => setTask(text)}
                    style={styles.input}
                />
                
            </View>

            <View style={styles.buttonContainer}>
                
                <TouchableOpacity
                    onPress={addTodo}>
                  <View style={styles.addWrapper}>
                    <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
                
                
            </View>
            </KeyboardAvoidingView>
            </ImageBackground>
        //</SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
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
    //marginBottom: 150,
    

  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {},
});


