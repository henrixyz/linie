import { Stack, Tabs } from 'expo-router'
import { View, Text, StyleSheet, TextInput } from 'react-native'


export default function Search() {
  return (
    <View style={styles.container}>
        <TextInput placeholder="pesquisar:" style={styles.card}></TextInput>
    </View>
)};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card:{
    width:'95%',
    height:'6%',
    paddingLeft:15,
    backgroundColor:'#fff',
    fontSize: 15,
    borderRadius: 30,

  }
  });
