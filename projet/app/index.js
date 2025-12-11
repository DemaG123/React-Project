import { Link, router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Routeur() {
  return (
    <View>
      <Text>Page principale</Text>
      <Link href='/page2'>vers page 2</Link>
      <Pressable onPress={() => router.push("/page3")}>
        <Text>vers page 3</Text>
      </Pressable>
      
      
      
    </View>
  );
}