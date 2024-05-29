import { Link } from 'expo-router'
import {StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'


export default function Consulta() {
  return (
    <View style={styles.container}>
        <Text>tela consultas</Text>
        

        <Link href={'../(tabs)/'} asChild>
        <TouchableOpacity>
        <Text>voltar</Text>
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
    }
  })