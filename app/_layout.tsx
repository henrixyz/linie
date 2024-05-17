import { Stack, Tabs } from 'expo-router'


export default function Loyaut() {
  return (

   
    <Stack
    screenOptions={{
      headerBackVisible: false,
      headerStyle:{
        backgroundColor: "#121212"
        },
        headerTintColor: "#FFF"
      }}>


        
        <Stack.Screen name="index" options={{
            title: "Cadastro"}}/>
        <Stack.Screen name="profile" options={{
            title: "Linie",
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#FFFFFF'
            },
            headerTintColor: '#000000', 
            headerTitleStyle: {
              fontWeight: 'bold' 
            },
            // headerLeft: null
            
          }}
        />
        <Stack.Screen name="user/[id]" options={{title: "usuario"}}/>
    </Stack>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });