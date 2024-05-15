// import { StyleSheet, Text, View } from 'react-native';
// import { Link } from 'expo-router'

// export default function App() {
  //   return (
    //     <View style={styles.container}>
    //       <Text>tela 1</Text>
    //       <Text>tela 1</Text>
    //       <Text>tela 1</Text>
    //       <Text>tela 1</Text>
    //       <Link href={"/profile"}>ir para tela 2</Link>
    //     </View>
    //   );
    // }
    
    // const styles = StyleSheet.create({
      //   container: {
        //     flex: 1,
        //     backgroundColor: '#fff',
        //     alignItems: 'center',
        //     justifyContent: 'center',
        //   },
        // });
        
        import { StatusBar } from 'expo-status-bar';
        import React, {useState} from 'react'
        import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
        // import { NavigationContainer } from '@react-navigation/native';
        import { Link } from 'expo-router'
        
        // // import { Teste } from './src/Text'
        
        export default function App() {
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
      <StatusBar hidden />
      <Image style={{width:300,height:200}}source={require('../../assets/img/linie_default.png')}/>
      <TextInput placeholder="nome:" style={styles.textInput} onChangeText={text=>setNome(text)}/>
      <TextInput placeholder="email:" style={styles.textInput} onChangeText={text=>setEmail(text)}/>
      <TextInput secureTextEntry={true} placeholder="senha:" style={styles.textInput} onChangeText={text=>setSenha(text)}/>

      <TouchableOpacity style={styles.btmCadastro} onPress={()=>cadastro()}>
        <Text style={{color:'white', textAlign:'center'}}>Cadastrar</Text>
        
        <Link href={"/profile"}>teste</Link>

      </TouchableOpacity>
      <StatusBar style="dark"/>

    </View>
    // Teste()
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding:20
  },
  textInput:{
    width:'100%',
    height:40,
    backgroundColor:'white',
    borderRadius:20,
    paddingLeft:10,
    borderWidth:3,
    borderColor:'#FF66CC',
    marginBottom:10
  },
  btmCadastro:{
    width:'50%',
    height:48,
    backgroundColor:'#d29fe0',
    borderRadius:20,
    marginBottom:10,
    justifyContent:'center'
  }
});
