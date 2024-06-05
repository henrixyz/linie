import { View, Text, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function Search() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='white'/>
      <Link href={'../inSearch/searching'} style={styles.icon}>
        <MaterialIcons name="search" size={24} color="black"  />
      </Link>
        <TextInput placeholder="Pesquisar" style={styles.card}>
        </TextInput>
    </View>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    flexWrap: 'wrap',

  },
  icon: {
    padding: 12,
    paddingLeft:22,

  },
  card:{
    width:'80%',
    height:'7%',
    paddingLeft:25,
    backgroundColor:'#fff',
    fontSize: 15,
    color: 'black',
    borderRadius: 30,

  }
  });
