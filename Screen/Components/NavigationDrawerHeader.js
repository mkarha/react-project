// Import React and Component
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const NavigationDrawerHeader = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{flexDirection: 'row', margin: 10}}>
      <TouchableOpacity onPress={toggleDrawer} >
      <MaterialCommunityIcons name="menu" color={'white'} size={25}
        />
      </TouchableOpacity>
    </View>
  );
};
export default NavigationDrawerHeader;