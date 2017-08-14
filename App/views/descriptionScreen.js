/**
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';
// Navegador entre paginas
import { StackNavigator } from 'react-navigation';
 // Componente de Gradient
import LinearGradient from 'react-native-linear-gradient'

// Componentes Propios
import  Header from '../components/Header'
import  IngredientesDescp from '../components/IngredientesDescp'

import styles from '../styles/index.style'

import { ArrayPizzas } from '../stactic/js/Pizzas'


export default class DescriptionScreen extends Component {
  constructor(props){
    super(props);
this.id_ = 0;
    this.Cell = ArrayPizzas.map((val,key)=>{
if (key == this.id_) {
  return <IngredientesDescp key={key}  titulo={val.nombre}    imagen={val.imagen}    ingredientes={val.ingredientes} keyval={key}   />
}else{
}
  });
  }

  render() {
    return (
<View style={styles.containerDesc} >
  <Header
    backBtn={true}
    titulo='Description'
    navigation={this.props.navigation} />
<View style={styles.contImgCover}>
  <Image
    style={styles.imgCover}
    source={require('../stactic/img/pizza-lover.jpg')}
  />
</View>
<ScrollView style={styles.scrollCont} >


<View style={styles.coverLetters}>
  <Text style={styles.TituloDesc} >LOVER CHEESE</Text>
  <Text style={styles.SubTituloDesc} >Classic Thin Crust</Text>
</View>

<View style={styles.contIngredientesDesc} >

{this.Cell}

</View>


</ScrollView>

</View>
    );
  }
}
