/*
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  ScrollView,
  StatusBar,
  View
} from 'react-native';
 // Componente de Gradient
import LinearGradient from 'react-native-linear-gradient'
// Carousel
import  Carousel  from 'react-native-snap-carousel';

import {BoxShadow} from 'react-native-shadow'

import { sliderWidth, itemWidth,itemHorizontalMargin } from '../config/styles'

import { ArrayPizzas } from '../config/Pizzas'

// Componentes Propios
import Header from '../components/Header/index'
import CarouselCell from '../components/CarouselCell'
const styles =  StyleSheet.create({
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
  sliderContainer: {
  paddingHorizontal: itemHorizontalMargin,
  },
  slider:{
    flex:1
  }
  // HomeScreen Styles < ----
});


export default class HomeScreen extends Component {

constructor(props){
  super(props)

this.Cell = ArrayPizzas.map((val,key)=>{
return <CarouselCell key={key}  titulo={val.nombre} navigation={this.props.navigation}   imagen={val.imagen}    ingredientes={val.ingredientes} keyval={key}   />
});

}


  render() {
    return (

 <LinearGradient
colors={['#B5A287','#D3C19E']}
   style={styles.container}
   >
     <StatusBar
         backgroundColor='#B5A287'
         barStyle="light-content"
       />

<Header
  btnMenu={true}
   titulo='Inicio'
   navigation={this.props.navigation} />
<ScrollView style={styles.scrollCont} >
<Carousel
  style={styles.carouselCont}
         sliderWidth={sliderWidth}
         itemWidth={itemWidth}
         firstItem={0}
         inactiveSlideScale={0.94}
         inactiveSlideOpacity={0.6}
         enableMomentum={false}
         containerCustomStyle={styles.slider}
         contentContainerCustomStyle={styles.sliderContainer}
         showsHorizontalScrollIndicator={false}
         snapOnAndroid={true}
         removeClippedSubviews={false}
       >

{this.Cell}


       </Carousel>
</ScrollView>
</LinearGradient>
    );
  }
}
