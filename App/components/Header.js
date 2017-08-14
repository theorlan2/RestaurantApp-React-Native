
// @flow

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default class Header extends Component {

constructor(props){
  super(props)

}

render() {
  return(
<View  style={styles.headerCont} >
  {this.props.btnMenu == true &&
<TouchableOpacity style={styles.headerIconMenuCont}  onPress={ () => this.props.navigation.navigate('DrawerOpen')  } >
<Image
  style={styles.headerIconMenu}
  source={require('../stactic/icons/menu.png')} />
</TouchableOpacity>
}
  {this.props.backBtn == true &&
<TouchableOpacity style={styles.headerIconMenuCont}  onPress={ () => this.props.navigation.goBack() } >
<Text style={styles.headerTittle} >Back</Text>
</TouchableOpacity>
}

<Text style={styles.headerTittle} >{this.props.titulo}</Text>

<Image
  style={styles.headerIconMenu}
  source={require('../stactic/icons/controls.png')} />


</View>
  )
}

}

const styles = StyleSheet.create({
headerCont: {
  flexDirection:'row'
},
headerIconMenuCont: {
flex:1,
height:40

},
headerIconMenu: {
  width:32,
  height:32,
 resizeMode:'contain',
 margin:10,
},
headerTittle:{
  flex:4,
  fontSize:20,
  marginTop:13,
  height:40,
  textAlign:'center',
  color:'#fff'
},


});
