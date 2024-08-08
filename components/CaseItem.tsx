import { useNavigation } from "expo-router";
import { View } from "react-native"
import { Button, Icon, Text } from "react-native-paper"

interface CaseItemProps {
    type: string;
    duration: number;
    id: string;
    date: string;
    time: string;
}

export default function CaseItem({ type, duration, id, date, time }: CaseItemProps) {

    const navigation = useNavigation();

    return (
        <>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    width: "100%",
                    height: 112,
                    backgroundColor: '#424242',
                    borderRadius: 10,
                    marginBottom: 8,
                    padding: 16
                }}
            >
                <View
                    style={{
                        // flex: 1,
                        width: '80%'
                    }}
                >
                    {/* Case Type */}
                    <Text style={{ fontWeight: 'bold', color: 'white' }} variant="headlineSmall" >{type}</Text>

                    {/* Case Info */}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            width: '100%',
                            marginTop: 8,
                        }}
                    >
                        <Text>Duration: {duration} min</Text>
                        <Text style={{ marginLeft: 16 }}>Case ID: {id}</Text>
                    </View>

                    {/* Case Date Time */}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            width: '25%',
                            justifyContent: 'space-between',
                            marginTop: 8,
                        }}
                    >
                        <Text>{date}</Text>
                        <Text style={{ marginLeft: 16 }}>{time}</Text>
                    </View>
                </View>

                <View
                    style={{
                        flex: 1,
                    }}
                >
                    <Button 
                        // mode="outlined"
                        icon={'chevron-right'} 
                        onPress={() => navigation.navigate('CaseDetails/caseDetail')} 
                        contentStyle={{
                            height: '100%',
                            width: '100%',
                        }}
                    />
                </View>
            </View>

        </>
    )
}