import 'react-native-gesture-handler';

// Import React and Component
import React from 'react';

// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
// Import Screens
import SplashScreen from './Screen/SplashScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import DrawerNavigationRoutes from './Screen/DrawerNavigationRoutes';
import HomeScreen from './Screen/DrawerScreens/HomeScreen';
import SettingsScreen from './Screen/DrawerScreens/SettingsScreen';
import LogoutScreen from './Screen/DrawerScreens/LogoutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const Auth = () => {
    // Stack Navigator for Login and Sign up Screen
    return (
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{
            title: 'Register', //Set Header Title
            headerStyle: {
              backgroundColor: '#307ecc', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    );
  };

const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        {isLoggedIn ? (
            // Screens for logged in users
            <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Logout" component={LogoutScreen} />
            </Stack.Group>
        ) : (
            // Auth screens
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}} />
                <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown: false}} />
            </Stack.Group>
        )}
            {/* Common modal screens */}
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
                <Stack.Navigator initialRouteName="SplashScreen">
                {/* SplashScreen which will come once for 5 Seconds */}
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Settings" component={SettingsScreen} />
            </Stack.Group>
        </Stack.Navigator>
    </NavigationContainer>
  );
};