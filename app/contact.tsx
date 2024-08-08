import { View } from "react-native"
import { Text } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export default function Contact() {
    const { top, bottom } = useSafeAreaInsets();
    return (
        <>
            <View
                style={{
                    // flex: 1,
                    // justifyContent: "center",
                    alignItems: "center",
                    top: top + 36,
                    height: "100%",
                }}
            >
                <Text style={{ color: '#3e3e3e' }} variant="labelLarge">Contact</Text>
                <Text style={{ fontWeight: 'bold', color: '#3e3e3e' }} variant="displayMedium">1-888-888-8888</Text>
                <Text style={{ color: '#3e3e3e' }} variant="labelLarge">phone</Text>
                <Text style={{ fontWeight: 'bold', color: '#3e3e3e' }} variant="displayMedium">help@miraiq.com</Text>
                <Text style={{ color: '#3e3e3e' }} variant="labelLarge">email</Text>

            </View>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    // height: "100%",
                    bottom: bottom + 56
                }}
            >
                <Text style={{ color: '#3e3e3e' }} variant="labelLarge">Legal all rights reserved by Virtual Incision©2021</Text>
                <Text style={{ color: '#3e3e3e' }} variant="labelLarge">©2021</Text>
            </View>
        </>
    )
}