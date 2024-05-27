import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#000000"/>

      {/* <View style={styles.image} ></View> */}
      <Image source={require('./assets/img/linieDefault.png')} style={styles.image}/>

      <Text style={styles.header} > Seja Bem-Vindo! </Text>
      <View style={styles.trecho}>
      <Link href='stackInit/signin' style={styles.btmInit}>criar uma conta</Link>
      <Link href='stackInit/login' style={styles.btmInit} >já tem? Login</Link>
      {/* <Link href='(tabs)/profile' style={styles.btmEnter}>já tem login? entrar</Link> */}

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEDEDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 200,
    height: 200,
    marginTop: 70,
    backgroundColor: 'pink'
  },
  header:{
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    padding:18,
  },
  trecho: {
    flex:1,
    width:'100%',
    height: '55%',
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    marginTop:50,
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btmInit:{
    width:250,
    height:50,
    backgroundColor:'#000000',
    borderRadius:10,
    marginBottom:20,
    color:'white',
    textAlign:'center',
    alignItems:'center'
  }
});