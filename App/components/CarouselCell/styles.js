

import { StyleSheet, Dimensions, Platform } from 'react-native';


import {
itemWidth,
PhotoWidth,
itemHorizontalMargin,
} from '../../config/styles'

export default StyleSheet.create({
// Carousel Home Styles  ---->
sliderContainer: {
paddingHorizontal: itemHorizontalMargin,
},
cellCarousel: {
width:itemWidth
},
ImageSliderCont:{
top:5,
width:PhotoWidth+5,
height:PhotoWidth,
backgroundColor:'rgba(0,0,0,0.01)',
shadowColor:'#d8c2b1',
elevation:5,
alignItems:'center',
},
ImageSlider:{
width:PhotoWidth,
height:PhotoWidth,
borderRadius:8,
},
backDetSlider: {
marginTop:-15,
width:itemWidth-20,
backgroundColor:'#f3f0e7',
margin:10,
padding:10,
borderRadius:4,
elevation:7,
zIndex:0
},
tituloDetSlider: {
fontSize:20,
fontWeight:'bold',
textAlign:'center'
},
cellCarousel:{
alignItems:'center',
justifyContent:'center'
},
tituloIngredients:{
flex:1,
fontSize:18,
textAlign: 'left'
},
ingredientsListCont:{
flex:1,
flexDirection:'row',
justifyContent:'center',
alignItems:'center'
},
ingredientCol3: {
flex:1,
justifyContent:'center',
alignItems:'center',
marginTop:10,
marginBottom:10,

},
iconIngredient: {
width:32,
height:32
},
nomIngredient:{
color:'#a9a390'
},
pesoIngredient:{
color:'#d5d2c7'
},
btnSelectP: {
width:PhotoWidth-20,
padding:10,
margin:10,
backgroundColor:'#f7c84a',
borderRadius:3,
elevation:3
},
btnSelectPText:{
color:'#bf9522',
textAlign:'center',
},

// Carousel Home Styles  <----
});
