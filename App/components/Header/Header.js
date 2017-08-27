
// @flow

import React, { Component } from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {styles} from './styles'

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
  source={require('../../stactic/icons/menu.png')} />
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
  source={require('../../stactic/icons/controls.png')} />


</View>
  )
}

}
