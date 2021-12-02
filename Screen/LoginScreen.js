import { useNavigation } from '@react-navigation/core'
import React, {useEffect, useState} from 'react'
import { 
    KeyboardAvoidingView, 
    SafeAreaView,
    StyleSheet, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View,
    Image,
    ImageBackground,
    Keyboard,
 } from 'react-native'

import { auth } from '../firebase';
import db from '../firebase';

const LoginScreen = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user)  {
                navigation.replace("DrawerNavigationRoutes")
            }
        })
        return unsubscribe
    }, [])
    

    const handleSignup = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registered with: ', user.email);
                
            })
        .catch(error => alert(error.message))
    }

    const handleLogin = () => {
        auth
            .signInWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Logged in with: ', user.email);
            })
        .catch(error => alert(error.message))
    }

    return (
        <ImageBackground
          style={styles.container}
          source={require('../Image/elephant.png')}  
        >
            <Text style={styles.text}>Welcome to Todo!</Text>
            <View style={styles.inputContainer}> 
                <TextInput
                    keyboardType="email-address"
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin} //{() => { } }//
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignup}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.button, styles.buttonOutlineText}>Register</Text>
                </TouchableOpacity>
            </View>
            </ImageBackground>
        //</SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
      flex: 1, 
      justifyContent: 'flex-start',
      alignItems: 'center',
  },
  inputContainer: {
      width: '80%',
  },
  text: {
      color: 'black',
      fontSize: 25,
      fontWeight: '700',
      //backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 60,
      marginBottom: 150,
  },
  input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
  },
  buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
  },
  button: {
      backgroundColor: '#0782f9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
  },
  buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782f9',
      borderWidth: 2,
  },
  buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
  },
  buttonOutlineText: {
      color: '#0782f9',
      fontWeight: '700',
      fontSize: 16,
  },
})
