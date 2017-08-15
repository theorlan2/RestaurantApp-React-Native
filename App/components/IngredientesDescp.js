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
  'roast-chicken.png': require('../stactic/icons/roast-chicken.png'),
  'onion.png': require('../stactic/icons/onion.png'),
  'apple.png': require('../stactic/icons/apple.png'),
  'garlic.png': require('../stactic/icons/garlic.png'),
  'cinnamon.png': require('../stactic/icons/cinnamon.png'),
  'fish.png': require('../stactic/icons/fish.png'),
  'sauce.png': require('../stactic/icons/sauce.png'),
};

const size = 'Grande';

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
     <Text style={styles.btnEdit}>Edit</Text>
   </View>

   <View style={styles.ingredientsListCont} >
{this.ListIngredientes}
  <View  style={styles.btnAddIngredientes} >
   <Image style={styles.iconIngredient} source={iconsMap['sauce.png']}  />
  <Text   style={styles.nomIngredient} >Add</Text>
  </View>

   </View>

   <View style={styles.flexCont}>
       <Text style={styles.tituloIngredients}>Size</Text>
     </View>

<View style={styles.sizePizzasCont} >

     <View  style={styles.btnSizePizza} >
      <Image
        style={styles.iconPizzaPeq} source={require('../stactic/icons/pizza.png')}  />
     <Text   style={styles.nomIngredient} >200 g</Text>
     </View>

     <View  style={styles.btnSizePizza} >
      <Image
        style={styles.iconPizzaMed} source={require('../stactic/icons/pizza.png')}  />
     <Text   style={styles.nomIngredient} >500 g</Text>
     </View>

     <View  style={styles.btnSizePizza} >
      <Image
        style={styles.iconPizzaGrand} source={require('../stactic/icons/pizza.png')}  />
     <Text   style={styles.nomIngredient} >1200 g</Text>
     </View>

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
