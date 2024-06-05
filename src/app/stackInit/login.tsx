
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { Link } from 'expo-router'
import { Picker } from '@react-native-picker/picker';
// // import { Teste } from './src/Text'

export default function Login() {
  const [nome,setNome] = useState('');
  const [email,setEmail] = useState('');
  const [senha,setSenha] = useState('');
  
  const cadastro = () => {
    
    // alert(nome);
    // alert(email);
    // alert(senha);
    //aqui fazer chamada no cadastro
  }
  
  // function cadastro(){
    //   alert('ok');
    // }
    
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
        <Image source={require('../assets/img/linieLogin.png')} style={styles.image}/>
            {/* <Text style={styles.image}></Text> */}
            <Text style={styles.header}> Crie sua conta </Text>
          
<StatusBar backgroundColor="#000000"/>
<TextInput placeholder="E-mail:" style={styles.textInput} onChangeText={text=>setEmail(text)}/>
      <Text style={styles.backLine}></Text>
<TextInput secureTextEntry={true} placeholder="Senha:" style={styles.textInput} onChangeText={text=>setSenha(text)}/>
      <Text style={styles.backLine}></Text>


<Picker style={styles.picker}>
        <Picker.Item label="escolha" value="null" />
        <Picker.Item label="psicólogo" value="option1" />
        <Picker.Item label="paciente" value="option1" />
      </Picker>


<TouchableOpacity style={styles.btmCadastro} onPress={()=>cadastro()}>
      <Link href={"../(tabs)/"}style={{color:'white', textAlign:'center'}}>entrar</Link>
</TouchableOpacity>

        </View>
    </View>
// Teste()
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDEDED',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  cardContainer: {
    width:350,
    height: '70%',
    borderRadius: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    fontSize: 20,
    backgroundColor: '#000',
    padding:18,
    borderRadius: 100,
    justifyContent: 'center',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 35,
    
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 5,
    padding:18,
  },
  textInput:{
    width:'90%',
    height:35,
    backgroundColor:'#ffff', //#dfedf7
    borderRadius:10,
    paddingLeft:35,
    marginBottom:10,
    marginTop:10

  },
  backLine: {
    width:'80%',
    height: 1,
    backgroundColor: 'black',
    marginHorizontal: 2, // Ajuste conforme necessário
  },
  picker: {
    height: 50,
    width: 150,
    padding:34,
    marginLeft: 50,
    marginRight: 50,
    alignItems: 'center',
    justifyContent: 'center'
    },
  btmCadastro:{
    width:'50%',
    height:48,
    backgroundColor:'#000',
    borderRadius:20,
    marginTop:15,
    justifyContent:'center'
  }
});