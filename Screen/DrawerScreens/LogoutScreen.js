import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { auth } from '../../firebase'
import {
  ImageBackground,
} from 'react-native'

const LogoutScreen = () => {
  const navigation = useNavigation()

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("Auth")
      })
      .catch(error => alert(error.message))
  }

  return (
    <ImageBackground
          style={styles.container}
          source={require('../../Image/bye.png')}  
        >
          <View style={styles.innerContainer}>
      <Text style={styles.buttonText}>Bye, bye!</Text>
        <Text style={styles.buttonText}>{auth.currentUser?.email}</Text>
        <Text style={styles.buttonText}> hope to see you soon!</Text>
        </View>
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        
        <Text style={styles.text}>Sign out</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default LogoutScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '80%',
    },
    innerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 110,
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
        width: '80%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline: {
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#0782f9',
        borderWidth: 2,
    },
    buttonText: {
        color: '#000',
        fontWeight: '700',
        fontSize: 18,
    },
    buttonOutlineText: {
        color: '#0782f9',
        fontWeight: '700',
        fontSize: 16,
    },
    text: {
      fontSize: 25,
      color: '#000',
      fontWeight: '700',
    }
})
