import { StatusBar } from 'expo-status-bar';
import React, { useRef } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,Button, Animated, Easing } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function PhaseThree() {
  const translateY = useRef(new Animated.Value(0)).current;
  const color = useRef(new Animated.Value(0)).current; 
  const slideDown = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 1000, 
        duration: 10000, 
        easing: Easing.exp,
        useNativeDriver: true,
      }),
      Animated.sequence([
        Animated.timing(color, {
          toValue: 1,
          duration: 5000, 
          useNativeDriver: true,
        }),
        Animated.timing(color, {
          toValue: 2,
          duration: 5000, 
          useNativeDriver: true,
        })
      ])
    ]).start();
  };

  const backgroundColor = color.interpolate({
    inputRange: [0, 1, 2],
    outputRange: ['gray', 'red', 'blue'] // Inicialmente cinza, depois vermelho e finalmente azul
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.dimScreen, { transform: [{ translateY }], backgroundColor }]} />
      <Button title="Slide Down Screen" onPress={slideDown} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 200,
    height: 200,
    marginTop: 70,

  },
  header:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    padding:18,
  },
  trecho: {
    flex:1,
    width:'100%',
    height: '55%',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btmInit:{
    width:250,
    height:50,
    backgroundColor:'#fff',
    borderRadius:50,
    marginBottom:20,
    color:'#000',
    textAlign:'center',
    fontWeight: 'bold',
  },
  dimScreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'gray',
  },
});
