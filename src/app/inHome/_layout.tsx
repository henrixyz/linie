import { Stack, Tabs } from 'expo-router'


export default function LoyautInHome() {
  return (

   
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor: "#EDEDED",
        },
        headerTintColor: "#000",
        headerTitleAlign: 'center',
      }}>

        <Stack.Screen name="consultas" options={{
            title: "consultas"}}/>
        <Stack.Screen name="calmDown" options={{
            title: "minigame"}}/>
        <Stack.Screen name="help" options={{
            title: "ajuda"}}/>
    </Stack>
  );
}