import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';


export default function Chat() {
  return (
    <View style={styles.container}>
        <Text>tela conversas</Text>
        
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
    })