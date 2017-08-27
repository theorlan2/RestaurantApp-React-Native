/**
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  View
} from 'react-native';
 // Componente de Gradient
import LinearGradient from 'react-native-linear-gradient'

// Componentes Propios
import  Header from '../components/Header'
import  IngredientesDescp from '../components/IngredientesDescp'
import { sliderWidth, itemWidth,itemHorizontalMargin } from '../config/styles'

import { ArrayPizzas } from '../config/Pizzas'

const styles = StyleSheet.create({
// Carousel Descripcion Styles  <----
containerDesc:{
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor:'#2f241b'
},
scrollCont:{
width:itemWidth
},
contImgCover:{
flex:1,
justifyContent: 'center',
alignItems: 'center',
position:'absolute',
top:0,
left:0,
zIndex:-1
},
imgCover: {
opacity:0.2,
resizeMode:'cover'
},
coverLetters: {
flex:1,
marginTop:50,
marginBottom:50,
},
TituloDesc:{
fontSize:24,
fontWeight:'bold',
color:'#fff',
textAlign:'center'
},
SubTituloDesc:{
fontSize:20,
color:'#eee',
textAlign:'center'
},
contIngredientesDesc: {
flex:1
},

});



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
