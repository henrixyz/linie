import { StyleSheet, Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router'

export default function User() {
    const { id }= useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text>pagina com id retorna id {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});