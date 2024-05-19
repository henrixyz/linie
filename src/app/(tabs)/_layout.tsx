import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (

    <Tabs screenOptions={{headerShown: false}}>

      <Tabs.Screen name="profile" options={{
            title: "Home"}}/>
      <Tabs.Screen name="search"/>
      <Tabs.Screen name="configg"/>
      <Tabs.Screen name="user"/>
    </Tabs>
  );
}
