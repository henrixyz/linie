import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function CalmDown() {
  return (
    <View style={styles.container}>
       <StatusBar backgroundColor="#000000"/>
  
      <Image source={require('../assets/img/linie_rage.png')} style={styles.image}/>
      <Text style={styles.header} > acalme-se </Text>
      

      
      <View style={styles.trecho}>
        <LinearGradient 
          colors={['#FF3131', '#FF914D']} 
          style={styles.trecho}
          start={{ x: 0, y: 0 }} 
          end={{ x: 1, y: 1 }}
          >

            <Link href={'../inCalmDown/phaseOne'}>
            <TouchableOpacity>
              <Text style={styles.btmInit}>Iniciar</Text>
            </TouchableOpacity>
  </Link>
        </LinearGradient>
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
    backgroundColor: '#fff',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btmInit:{
    width:250,
    height:50,
    backgroundColor:'#fff',
    borderRadius:50,
    marginBottom:20,
    color:'#000',
    textAlign:'center',
    fontWeight: 'bold',
  }
});

  