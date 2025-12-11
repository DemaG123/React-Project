import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (<Stack>

    <Stack.Screen name="index" options={{title:"Acceuil", headerStyle:{backgroundColor:'orange'}}}/>
    <Stack.Screen name="page2" options={{title:"Page 2", headerStyle:{backgroundColor:'blue'}}}/>
    <Stack.Screen name="page3" options={{title:"Page 3", headerStyle:{backgroundColor:'red'}}}/>

  </Stack>);
}
