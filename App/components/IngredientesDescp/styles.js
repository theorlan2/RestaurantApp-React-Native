import {  StyleSheet } from 'react-native';


import {
itemWidth,
PhotoWidth,
} from '../../config/styles'

const activeOrNo = {
  grande:1,
  peq:0.5,
  med:0.5,
};

export default styles = StyleSheet.create({
// Carousel Descripcion Styles  <----

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
ingredientCol3: {
flex:1,
justifyContent:'center',
alignItems:'center',
marginTop:10,
marginBottom:10,
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
zIndex:0,
flex:1
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
