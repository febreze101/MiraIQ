import { Text, View, useColorScheme } from "react-native";
import { PaperProvider, MD3DarkTheme, Button } from "react-native-paper";
import { Link } from 'expo-router';
import { useNavigation } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Index() {
  const navigation = useNavigation();

  const {top, bottom} = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "80%",
        }}
      >
        <Button mode="contained" onPress={() => navigation.navigate('login')}>Login</Button>
      </View>

    </View>
  );
}
