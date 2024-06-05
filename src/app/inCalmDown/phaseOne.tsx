import {StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

export default function PhaseOne() {
  return (
    <View style={styles.container}>
    <Text>fase 1</Text>
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