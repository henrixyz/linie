import { Stack, Tabs } from 'expo-router'
import { View, Text, StyleSheet, TextInput } from 'react-native'


export default function Search() {
  return (
    <View style={styles.container}>
        <TextInput placeholder="pesquisar:" style={styles.card}></TextInput>
        <Text>search</Text>
    </View>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width:'95%',
    height:'6%',
    paddingLeft:15,
    backgroundColor:'#DEDEDE',
    fontSize: 15,
    borderRadius: 30,

  }
  });
