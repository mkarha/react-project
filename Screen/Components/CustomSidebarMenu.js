// Import React and Component
import React from 'react';
import {
  View, 
  Text, 
  Alert, 
  StyleSheet, 
  TouchableOpacity,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
  createDrawerNavigator,
  DrawerNavigationProp,
  DrawerGestureContext,
  DrawerScreenProps
} from '@react-navigation/drawer';

import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../SplashScreen';
//import { back } from 'react-native/Libraries/Animated/src/Easing';
import LoginScreen from '../LoginScreen';
import AboutScreen from '../DrawerScreens/AboutScreen';

const CustomSidebarMenu = (props) => {
  return (
    <View style={stylesSidebar.sideMenuContainer}>
      <View style={stylesSidebar.profileHeader}>
        <View style={stylesSidebar.profileHeaderPicCircle}>
          <Text style={{fontSize: 25, color: '#307ecc'}}>
            {'Todo'.charAt(0)}
          </Text>
        </View>
        <Text style={stylesSidebar.profileHeaderText}>
          Todo
        </Text>
      </View>
      <View style={stylesSidebar.profileHeaderLine} />

      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
          
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomSidebarMenu;

const stylesSidebar = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#307ecc',
    paddingTop: 40,
    color: 'white',
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#307ecc',
    padding: 15,
    textAlign: 'center',
  },
  profileHeaderPicCircle: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    color: 'white',
    backgroundColor: '#ffffff',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileHeaderText: {
    color: 'white',
    alignSelf: 'center',
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  profileHeaderLine: {
    height: 1,
    marginHorizontal: 20,
    backgroundColor: '#e2e2e2',
    marginTop: 15,
  },
});