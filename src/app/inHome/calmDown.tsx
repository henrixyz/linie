import { Link } from 'expo-router'
import {StyleSheet, View, Text, TouchableOpacity } from 'react-native'


export default function CalmDown() {
  return (
    <View style={styles.container}>
        <Text>minigame</Text>
        

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