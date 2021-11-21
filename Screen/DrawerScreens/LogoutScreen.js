// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React and Component
import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';


import SplashScreen from '../SplashScreen';
//import { back } from 'react-native/Libraries/Animated/src/Easing';
import LoginScreen from '../LoginScreen';
import SettingsScreen from '../DrawerScreens/SettingsScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogoutScreen = ({ navigation })  => {



      return (
        <SafeAreaView style={styles.safeview}> 
          <View style={styles.viewStyle}>
            <View
              style={styles.viewStyle}>
              <Text
                style={styles.title}>
                 'Logout',
                'Are you sure? You want to logout?'
              </Text>
              <TouchableOpacity  onPress={() => {
                navigation.goBack();
                return null;   
              }}>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity  onPress={() => 
              {
                AsyncStorage.clear();
                navigation.replace('Auth');
              }}>

                
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonText}>Confirm</Text>
                </View>
              </TouchableOpacity>
            </View>
        </View>
           
        </SafeAreaView>
      );
    };

    const styles = StyleSheet.create({
        safeview: { 
          flex: 1,   
          backgroundColor: '#d8aadd',
          alignSelf: 'stretch', 
          alignItems: 'center',
          justifyContent: 'center',
        },
        viewStyle: {
          flex: 1,
          backgroundColor: '#d8aadd',
          alignItems: 'center',
          justifyContent: 'center',
        },
        buttonStyle: {
          marginTop: 30,
          marginBottom: 30,
          width: 150,
          height: 50,
          alignItems: 'center',
          backgroundColor: '#000000',
          justifyContent: 'center',
        },
        buttonText: {
          textAlign: 'center',
          fontWeight:'bold',
          color: '#ffffff',
        },
        title: {
          alignItems: 'center',
          justifyContent: 'center',
          textAlignVertical: 'top',
          marginTop: 30,
          fontWeight:'bold', 
          fontSize: 25, 
          color:'black' 
        },
        textStyle: {
          textAlign: 'center',
          fontWeight:'bold', 
          fontSize: 20, 
          color:'purple' 
        }
      });


export default LogoutScreen;