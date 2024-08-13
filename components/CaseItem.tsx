import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { TouchableHighlight, View, useColorScheme } from "react-native"
import { Button, Icon, Text } from "react-native-paper"
import { useFonts, Poppins_500Medium } from "@expo-google-fonts/poppins"


interface CaseItemProps {
    type: string;
    duration: number;
    id: string;
    date: string;
    time: string;
}

export default function CaseItem({ type, duration, id, date, time }: CaseItemProps) {

    const navigation = useNavigation();
    const colorScheme = useColorScheme();

    const [loaded, error] = useFonts({
        Poppins_500Medium,
    })

    return (
        <>
            <TouchableHighlight
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    borderWidth: 1,
                    height: 112,
                    marginBottom: 8,
                    borderColor: 'rgba(24, 24, 50, 1)',
                    borderRadius: 8,
                    width: "100%",
                    padding: 16,
                    backgroundColor: "rgba(24, 24, 41, 1)",
                }}
                onPress={() => navigation.navigate('CaseDetails/caseDetail')} >
                <View style={{ width: '100%', flexDirection: 'row', }}>
                    <View
                        style={{
                            // flex: 1,
                            // backgroundColor: "#333",
                            width: '90%'
                        }}
                    >
                        {/* Case Type */}
                        <Text style={{ fontWeight: 'bold', color: 'white', fontFamily: "Poppins_500Medium" }} variant="headlineSmall" >{type}</Text>

                        {/* Case Info */}
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                width: '100%',
                                marginTop: 8,
                            }}
                        >
                            <Text style={{ color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText, fontFamily: "Poppins_500Medium" }}>Duration: {duration} min</Text>
                            <Text style={{ marginLeft: 16, color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText, fontFamily: "Poppins_500Medium" }}>Case ID: {id}</Text>
                        </View>

                        {/* Case Date Time */}
                        <View
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                width: '40%',
                                justifyContent: 'space-between',
                                marginTop: 8,
                            }}
                        >
                            <Text style={{ color: colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText, fontFamily: "Poppins_500Medium" }}>{date}</Text>
                            <Text style={{ marginLeft: 16, color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText, fontFamily: "Poppins_500Medium" }}>{time}</Text>
                        </View>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%' // Ensure the View takes full height of its parent
                    }}>
                        <Icon size={30} source="chevron-right" />
                    </View>
                </View>

            </TouchableHighlight>
        </>
    )
}