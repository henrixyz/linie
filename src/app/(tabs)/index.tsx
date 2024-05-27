import React from 'expo';
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router'
import { Slot } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'


const Home = () => {


return (
  <View style={styles.container}>
    <StatusBar backgroundColor='black'/>
    <Slot/>
    
    <View style={styles.cardContainer}>
      
      <TouchableOpacity style={styles.card}>
        <LinearGradient
            colors={['#d1a2f3', '#a278e7']}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            >
          <View style={styles.image}></View>
          <Text style={styles.cardText}>consultas</Text>
        </LinearGradient>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <LinearGradient 
            colors={['#73cd96', '#8ce6ae']} 
            style={styles.card}
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 1 }}
            >
          <Text style={styles.cardText}>calma...</Text>
          <View style={styles.image}></View>
        </LinearGradient>
      </TouchableOpacity>


      <TouchableOpacity style={styles.card}>
        <LinearGradient 
            colors={['#b2dafa', '#6a9eda']}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            >
          <View style={styles.image}></View>
          <Text style={styles.cardText}>ajuda</Text>
        </LinearGradient>
      </TouchableOpacity>


      {/* <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Ligação</Text>
      </TouchableOpacity> */}
      
      {/* <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Jogo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Configuraç</Text>
      </TouchableOpacity> */}

    </View>
  </View>
     
);
}


const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#EDEDED',
},
header: {
  fontSize: 24,
  marginBottom: 20,
},
cardContainer: {
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
},
card: {
  width: '100%',
  height: 170,
  padding: 20,
  margin: 10,
  marginLeft: 3 ,
  marginRight: 10,
  borderRadius: 10,
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
},
image: {
  width: 150,
  height: 150,
  fontSize: 30,
  backgroundColor:'#000'
},
cardText: {
  fontSize: 30,
  fontWeight: 'bold',
  color: 'white'
},
});



export default Home;