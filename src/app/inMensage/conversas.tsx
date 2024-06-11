import {StyleSheet, View, Text,TextInput, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';

export default function Chat() {
  const Send = () => {
    // alert (msg)
  }
  return (

    <View style={styles.container}>
    <StatusBar backgroundColor='white'/>
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

      
    
    <TouchableOpacity style={styles.icon} onPress={()=>Send()}>
      <MaterialIcons name="send" size={24} color="#000"  />
    </TouchableOpacity>
  
      <TextInput placeholder="Digite sua mensagem" style={styles.movedView}>
      </TextInput>


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
      width: 40,
      height: 40,
      padding: 12, 
      position: 'relative',
      top: 675,
      left: 200,
      borderRadius: 100,
      
    },
    movedView:{
      width:'80%',
      height:'7%',
      paddingLeft:25,
      backgroundColor:'#fff',
      fontSize: 15,
      color: 'black',
      borderRadius: 30,
      marginTop: 630,
      position: 'relative',
      right: 30,
    }
    })