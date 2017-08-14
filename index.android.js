/*
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';
// Navegador entre paginas
import { DrawerNavigator } from 'react-navigation';

// Vistas
import DescriptionScreen from './App/views/descriptionScreen'
import HomeScreen from './App/views/HomeScreen'



const RestaurantApp = DrawerNavigator({
  Home: {
    path:'/',
    screen: DescriptionScreen
  },
  Description:{
    path:'/description',
    screen: HomeScreen
  }

});



AppRegistry.registerComponent('RestaurantApp', () => RestaurantApp);
