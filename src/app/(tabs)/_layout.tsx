import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Foundation, Ionicons, MaterialIcons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    
    
    <Tabs screenOptions={{
      headerStyle:{
        backgroundColor: "#EDEDED",
        },
          tabBarStyle: {
            backgroundColor: '#fff', 
          },
          tabBarActiveTintColor: '#000', 
          tabBarInactiveTintColor: '#888', 
        headerTintColor: "#000",
        headerTitleAlign: 'center',
        tabBarShowLabel: false
      }}>

      <Tabs.Screen name="index" 
          options={{
            title: "Linie",
            tabBarIcon: ({size, color}) => <Foundation name="home" size={size} color={color}/>
            }}
            />
      <Tabs.Screen name="search"
          options={{
            title: "Pesquisar",
            tabBarIcon: ({size, color}) => <Ionicons name="search" size={size} color={color}/>
            }}
            />
      <Tabs.Screen name="mensage" 
          options={{
            title: "Mensagens",
            tabBarIcon: ({size, color}) => <Ionicons name="chatbubble-ellipses" size={size} color={color}/>
            }}
            />
      <Tabs.Screen name="profile" 
          options={{
            title: "Usuário",
            tabBarIcon: ({size, color}) => <MaterialIcons name="person" size={size} color={color}/>
            }}
            />
    </Tabs>
  );
}
