import React from 'expo';
import { StatusBar } from 'expo-status-bar'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router'
import { Slot } from 'expo-router'
import { LinearGradient } from 'expo-linear-gradient'


const Home = () => {


return (
  <View style={styles.container}>
    <StatusBar backgroundColor='black'/>
    <Slot/>
    
    <View style={styles.cardContainer}>
      
        <Link href={'../inHome/consultas'}>
      <TouchableOpacity style={styles.card}>
        <LinearGradient
            colors={['#000', '#272727']}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            >
          <Image source={require('../assets/img/linie_med.png')} style={styles.image}/>
          <Text style={styles.cardTextLeft}>consultas</Text>
        </LinearGradient>
      </TouchableOpacity>
      </Link>


      <Link href={'../inHome/calmDown'}>
      <TouchableOpacity style={styles.card}>
        <LinearGradient 
            colors={['#000', '#272727']} 
            style={styles.card}
            start={{ x: 0, y: 0 }} 
            end={{ x: 1, y: 1 }}
            >
          <Text style={styles.cardTextRight}>calma...</Text>
          <Image source={require('../assets/img/linie_nerd.png')} style={styles.image}/>
        </LinearGradient>
      </TouchableOpacity>
      </Link>

      <Link href={'../inHome/calmDown'}>
      <TouchableOpacity style={styles.card}>
        <LinearGradient 
            colors={['#000', '#272727']}
            style={styles.card}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}  
            >
          <Image source={require('../assets/img/linie_sad.png')} style={styles.image}/>
          <Text style={styles.cardTextLeft}>ajuda</Text>
        </LinearGradient>
      </TouchableOpacity>
      </Link>
      
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
  alignItems: 'center',
},
image: {
  width: 150,
  height: 150,
  fontSize: 30,
},
cardTextLeft: {
  fontSize: 30,
 
  fontWeight: 'bold',
  color: 'white'
},
cardTextRight: {
  fontSize: 30,

  fontWeight: 'bold',
  color: 'white'
},
});



export default Home;