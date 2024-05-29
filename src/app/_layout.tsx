import { Stack, Tabs } from 'expo-router'


export default function Loyaut() {
  return (

   
    <Stack
    screenOptions={{
      headerShown:false,
      
      headerStyle:{
        backgroundColor: "#121212"
        },
        headerTintColor: "#FFF"
      }}>

        <Stack.Screen name="index" options={{
            headerShown: false,
            title: "Cadastro"}}/>
        <Stack.Screen name="profile" options={{
            title: "Cadastro"}}/>
    </Stack>
  );
}
