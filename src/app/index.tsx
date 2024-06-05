import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#000000"/>

      {/* <View style={styles.image} ></View> */}
      <Image source={require('./assets/img/linie_workout.png')} style={styles.image}/>

      <Text style={styles.header} > Seja Bem-Vindo! </Text>
      <View style={styles.trecho}>

      {/* <Link href='stackInit/signin' style={styles.btmInit}>Criar uma conta</Link>
      <Link href='stackInit/login' style={styles.btmInit}>Já tem? Entrar</Link> */}

      <Link href='stackInit/signin' asChild>
      <TouchableOpacity>
        <Text style={styles.btmInit}>Criar uma Conta</Text>
      </TouchableOpacity>
      </Link>

      <Link href='stackInit/login' asChild>
      <TouchableOpacity>
        <Text style={styles.btmInit}>Já possui? Entrar</Text>
      </TouchableOpacity>
      </Link>
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
    width:200,
    height:50,
    backgroundColor:'black',
    borderRadius:10,
    marginBottom:20,
    color:'white',
    textAlign:'center'
  }
});