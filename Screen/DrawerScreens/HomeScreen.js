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
  
  const addTodo = () => {
    console.log(task)
    var todo = task
    db
    .collection(auth.currentUser?.email)
    .add({
      Todo: todo,
    })
    setTaskItems([...taskItems, task]);
		setTask();
		console.log("mitvit");
  }

    return (
        /*<SafeAreaView
            style={styles.container}
            behavior="padding"
        >*/
        <ImageBackground
          style={styles.container}
          source={require('../../Image/elephant.png')}  
        >
            <Text style={styles.text}>Welcome to Todo!</Text>
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



  //const [task, setTask] = useState();
  //const [taskItems, setTaskItems] = useState([]);
  

  /*
  const handleAddTask = () => {
    db
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with: ', user.email);
            })
        .catch(error => alert(error.message))
    /*
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
    
  }

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy)
  }

  const [taskItems, setTaskItems] = useState([]);
	const [input, setTask] = useState('');
  /*
    const [todos, setTodos] = useState([]);
	  const [input, setInput] = useState('');
  
	
	useEffect(() => {
    var em = auth.currentUser?.email;
    console.log("efekti"+em)
		db.collection(auth.currentUser?.email).onSnapshot(snapshot => {
				setTaskItems(snapshot.docs.map(doc => doc.data().todo))
		})
	}, []);
	
	const addTodo = (event) => {
    console.log("olet addodossa")
		//event.preventDefault();
    db
      .collection(auth.currentUser?.email)
      .doc(event).add({
        Todo: event,
      })
    /*
      db.collection(auth.currentUser?.email).doc(event).add({
        todo: event,
		//timestamp: firebase.firestore.FieldValue.serverTimestamp()
		});
    
		
		setTaskItems([...taskItems, input]);
		setTask();
		console.log("mitvit");
	}


  return (
      <ImageBackground
        style={styles.container}
        source={require('../../Image/elephant.png')}  
      >
    
      {/* Added this scroll view to enable scrolling when list gets longer than the page }
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        keyboardShouldPersistTaps='handled'
      >

      {/* Today's Tasks }
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>
        <View style={styles.items}>
          {/* This is where the tasks will go! }
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index}  onPress={() => completeTask(index)}>
                  <Task text={item} /> 
                </TouchableOpacity>
              )
            })
          }
        </View>
      </View>
        
      </ScrollView>

      {/* Write a task }
      {/* Uses a keyboard avoiding view which ensures the keyboard does not cover the items on screen }
      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.writeTaskWrapper}
      >
        <TextInput 
        /*
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
        
          style={styles.input} 
          placeholder={'Write a task'} 
          value={input} 
          onChange={event => setTask(event.target.value)} />
        <TouchableOpacity onPress={addTodo}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
        
        
        
      </KeyboardAvoidingView>
      
      </ImageBackground>//</View>
  );
}


*/
