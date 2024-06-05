import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';


export default function Payment() {
  return (
    <View style={styles.container}>
        <Text>tela de pagamento</Text>

        <Link href={'../(tabs)/mensage'}>
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