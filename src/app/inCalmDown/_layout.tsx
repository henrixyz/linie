import { Stack, Tabs } from 'expo-router'


export default function LoyautInCalmDown() {
  return (

   
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor: "#EDEDED",
        },
        headerTintColor: "#000",
        headerTitleAlign: 'center',
      }}>

        <Stack.Screen name="phaseOne" options={{
            title: "fase 1"}}/>
        <Stack.Screen name="phaseTwo" options={{
            title: "fase 2"}}/>
        <Stack.Screen name="phaseThree" options={{
            title: "fase 3"}}/>
        <Stack.Screen name="phaseFour" options={{
            title: "fase 4"}}/>
    </Stack>
  );
}