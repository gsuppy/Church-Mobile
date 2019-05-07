/* React-Native Imports */

import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {createSwitchNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';

/* Screen Imports */

import HomeScreen from './screens/HomeScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import DirectoryScreen from './screens/DirectoryScreen.js';
import PrayScreen from './screens/PrayScreen.js';

/* Tab Navigation */

const MainNavigator = createBottomTabNavigator(
{
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon name="home" size={20} color={tintColor} />
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon name="user" size={20} color={tintColor} />
    },
  },
  Directory: {
    screen: DirectoryScreen,
    navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon name="address-book" size={20} color={tintColor} />
    },
  },
  Pray: {
    screen: PrayScreen,
      navigationOptions: {
      tabBarIcon: ({tintColor}) =>
        <Icon name="praying-hands" size={20} color={tintColor} />
    },
  },
},
{
  tabBarOptions: {
    activeTintColor: 'darkorange',
    inactiveTintColor: 'gray'
  }
});

const App = createAppContainer(MainNavigator);
export default App;