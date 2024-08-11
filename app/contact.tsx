import { Colors } from "@/constants/Colors";
import { View, useColorScheme } from "react-native"
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Contact() {
    const { top, bottom } = useSafeAreaInsets();
    const colorScheme = useColorScheme();
    return (
        <>
            <View
                style={{
                    // flex: 1,
                    // justifyContent: "center",
                    alignItems: "center",
                    // top: top + 36,
                    height: "100%",
                    backgroundColor: colorScheme === "dark" ? Colors.dark.colors.surface : Colors.light.colors.surface 
                }}
            >
                <View
                    style={{
                        alignItems: "center",
                        top: top + 32
                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText, marginBottom: 32 }} variant="headlineSmall">Contact</Text>
                    <Text style={{ fontWeight: 'bold' }} variant="displayMedium">1-888-888-8888</Text>
                    <Text style={{ color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText, marginBottom: 32 }} variant="labelLarge">phone</Text>
                    <Text style={{ fontWeight: 'bold' }} variant="displayMedium">help@miraiq.com</Text>
                    <Text style={{ color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText }} variant="labelLarge">email</Text>
                </View>

            </View>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    // height: "100%",
                    bottom: bottom + 56
                }}
            >
                <Text style={{ color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText }} variant="labelLarge">Legal all rights reserved by Virtual Incision©2021</Text>
                <Text style={{ color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText }} variant="labelLarge">©2021</Text>
            </View>
        </>
    )
}