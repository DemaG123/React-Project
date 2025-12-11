import { Stack } from "expo-router";

export default function RootLayout() {
  return (<Stack>

    <Stack.Screen name="index" options={{title:"Acceuil", headerStyle:{backgroundColor:'green'}}}/>
    <Stack.Screen name="recherche" options={{title:"Recherche", headerStyle:{backgroundColor:'green'}}}/>

  </Stack>);
}
