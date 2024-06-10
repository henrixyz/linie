import { Stack, Tabs } from 'expo-router'


export default function LoyautInMensage() {
  return (
    <Stack screenOptions={{
      headerStyle:{
        backgroundColor: "#EDEDED",
        },
        headerTintColor: "#000",
        headerTitleAlign: 'center',
      }}>

        <Stack.Screen name="conversas" options={{
            title: "Conversas"}}/>
        <Stack.Screen name="payment" options={{
            title: "Pagamento"}}/>

    </Stack>
  );
}