

import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const slideHeight = viewportHeight * 0.4;
const slideWidth = wp(85);
const itemHorizontalMargin = wp(2);
const backDescripWidth = wp(95);

function wp (percentage) {
  const value = (percentage * viewportWidth) / 100;
  return Math.round(value);
}

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;
const PhotoWidth = itemWidth-40;
const entryBorderRadius = 8;
const activeOrNo = {
  grande:1,
  peq:0.5,
  med:0.5,
};

export default StyleSheet.create({
// HomeScreen Styles ---- >
  container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselCont:{
    flex:1
  },
scrollCont:{
flex:1
},
  // HomeScreen Styles < ----

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

// Carousel Descripcion Styles  <----
containerDesc:{
  flex: 1,
  flexDirection:'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'#2f241b'
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
contDescp:{
  flex:1
},
backDetDescp: {
backgroundColor:'#f3f0e7',
margin:10,
padding:10,
borderRadius:4,
elevation:7,
zIndex:0
},
flexCont:{
  flex:1,
},
tituloIngrDescp:{
fontSize:18,
textAlign: 'left'
},
tituloIngrDescp:{
fontSize:18,
textAlign: 'left'
},
btnAddIngredientes:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,
  marginBottom:10,
  borderWidth:0.7,
  borderColor:'#d5d2c7',
  padding:2,
  paddingTop:15,
  paddingBottom:15,
  borderRadius:8
},
btnEdit:{
  flex:1,
  fontSize:18,
  textAlign:'right',
},
sizePizzasCont:{
  flex:1,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center'
},
btnSizePizza:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  marginTop:10,
  marginBottom:10,
},
iconPizzaPeq: {
  width:32,
  height:32,
  opacity:activeOrNo.peq,
},
iconPizzaMed: {
  width:42,
  height:42,
  opacity:activeOrNo.med,
},
iconPizzaGrand: {
  width:48,
  height:48,
  opacity:activeOrNo.grande,
},
iconActive:{
opacity:1
},
iconCheckIcon:{
  position:'absolute',
  top:-4,
  right:14,
  width:24,
  height:24,
  zIndex:10
}
});
