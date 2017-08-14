import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  View
} from 'react-native';

import styles from '../styles/index.style'

const iconsMap = {
  'tomato.png': require('../stactic/icons/tomato.png'),
  'cheese.png': require('../stactic/icons/cheese.png'),
  'chili-pepper.png': require('../stactic/icons/chili-pepper.png'),
};


export default class IngredientesDescp extends Component {
  constructor(props){
    super(props)

this.ListIngredientes = this.props.ingredientes.map((val,key) => {

return ( <View key={key} style={styles.ingredientCol3} >
 <Image key={key} style={styles.iconIngredient} source={iconsMap[val.icon]}  />
<Text   style={styles.nomIngredient} >{val.nombre}</Text>
<Text   style={styles.pesoIngredient} >{val.peso}</Text>
</View> )
});

  }

render(){
  return (
    <View
    style={styles.contDescp}  >
    <StatusBar
        backgroundColor='#2f241b'
        barStyle="light-content"
      />

<View style={styles.backDetDescp}   >
 <View style={styles.flexCont}>
     <Text style={styles.tituloIngredients}>Main Ingredients</Text>
   </View>

   <View style={styles.ingredientsListCont} >
{this.ListIngredientes}
   </View>

    <TouchableOpacity style={styles.btnSelectP} >
      <Text style={styles.btnSelectPText} >Selecionar</Text>
    </TouchableOpacity>

   </View>
     </View>


  )
}



}

const styles2 = StyleSheet.create({
ingredientsListCont:{
  flex:1
}

 });
