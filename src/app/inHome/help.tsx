import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function Help() {
  return (
    <View>
    <Text>tela de videos</Text>
    

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