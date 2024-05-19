import React from 'expo';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router'

const Navigation = () => {

return (

  <View style={styles.container}>
    <Text style={styles.header}>Bem-Vindo ao Linie 👋</Text>
    <View style={styles.cardContainer}>
      
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>chat</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Ligação</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Jogo</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardText}>Configuraç</Text>
      </TouchableOpacity>

    </View>
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
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
  height: 150,
  padding: 20,
  margin: 10,
  borderRadius: 10,
  backgroundColor: '#f8f8f8',
  alignItems: 'center',
  justifyContent: 'center',
},
cardText: {
  fontSize: 18,
},
});

export default Navigation;