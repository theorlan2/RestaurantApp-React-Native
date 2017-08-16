import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  View
} from 'react-native';

import styles from '../styles/index.style'

const iconsMap = {
  'tomato.png': require('../stactic/icons/tomato.png'),
  'cheese.png': require('../stactic/icons/cheese.png'),
  'chili-pepper.png': require('../stactic/icons/chili-pepper.png'),
};


export default class CarouselCell extends Component {
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
    <TouchableOpacity
            key={this.props.keyval}  style={styles.cellCarousel}
              >
   <View style={styles.ImageSliderCont}  >
    <Image
      source={{ uri:this.props.imagen}}
   style={styles.ImageSlider}
     />
   </View>

   <View style={styles.backDetSlider}   >
   <Text style={styles.tituloDetSlider}>{this.props.titulo}</Text>

   <Text style={styles.tituloIngredients}>Main Ingredients</Text>

   <View style={styles.ingredientsListCont} >
{this.ListIngredientes}
   </View>

    <TouchableOpacity style={styles.btnSelectP} onPress={() => this.props.navigation.navigate('Description')} >
      <Text style={styles.btnSelectPText} >Selecionar</Text>
    </TouchableOpacity>

   </View>

                </TouchableOpacity>

  )
}



}
