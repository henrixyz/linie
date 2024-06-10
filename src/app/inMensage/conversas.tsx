import {StyleSheet, View, Text,TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

export default function Chat() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='white'/>
      <Link href={'../inSearch/searching'} style={styles.icon}>
        <MaterialIcons name="send" size={24} color="black"  />
      </Link>
        <TextInput placeholder="digite aqui" style={styles.card}>
        </TextInput>
        
       
        
        <Link href={'../(tabs)/mensage'}>
        <TouchableOpacity>
        <Text>voltar</Text>
        </TouchableOpacity>
        </Link>
        <Link href={'./payment'}>
        <TouchableOpacity>
        <Text>tela pagamento</Text>
        </TouchableOpacity>
        </Link>
    </View>

  )};

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#DEDEDE',
      alignItems: 'center',
      justifyContent: 'center',
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
    })