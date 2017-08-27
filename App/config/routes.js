import {  AppRegistry, } from 'react-native';
// Navegador entre paginas
import { DrawerNavigator } from 'react-navigation';

// Vistas
import DescriptionScreen from '../screens/descriptionScreen'
import HomeScreen from '../screens/HomeScreen'


//  Navegador de la aplicacion
export default RestaurantApp = DrawerNavigator({
  Home: {
    path:'/',
    screen: HomeScreen
  },
  Description:{
    path:'/description',
    screen: DescriptionScreen
  }

});
