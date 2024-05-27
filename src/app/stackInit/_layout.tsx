import { Stack, Tabs } from 'expo-router'
import { StyleSheet } from 'react-native';


export default function Loyaut() {
  return (

   
    <Stack
    screenOptions={{
      
      headerStyle:{
        backgroundColor: "#EDEDED"
        },
        headerTintColor: "#000",
        headerTitleAlign: 'center',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
      }}>
        <Stack.Screen name="login" options={{
            title: "login"}}/>
        <Stack.Screen name="signin" options={{
            title: "cadastro"}}/>
    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});