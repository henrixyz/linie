import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
      <Link href='signin' style={styles.btmInit}>cadastrar</Link>
      <Link href='login' style={styles.btmInit} >login</Link>
      <Link href='(tabs)/profile' style={styles.btmEnter}>já tem login? entrar</Link>

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
  btmInit:{
    width:'30%',
    height:30,
    backgroundColor:'#000000',
    borderRadius:20,
    marginBottom:10,
    justifyContent:'center',
    color:'white',
    textAlign:'center'
  },
  btmEnter:{
    width:'30%',
    height:45,
    backgroundColor:'#000000',
    borderRadius:20,
    marginBottom:10,
    justifyContent:'center',
    color:'white',
    textAlign:'center'
  }
});


