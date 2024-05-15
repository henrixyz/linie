import { Stack } from 'expo-router'


export default function Loyaut() {
  return (

    <Stack
      screenOptions={{
        headerStyle:{
          backgroundColor: "#121212"
        },
        headerTintColor: "#FFF"
      }}

    >

        <Stack.Screen name="index" options={{title: "inicio"}}/>
        <Stack.Screen name="profile" options={{title: "profile"}}/>
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