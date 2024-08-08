import { SafeAreaView, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text } from "react-native-paper";


export default function CaseSummary() {

    return (
        // <SafeAreaView style={{ flex: 1 }} >
            <ScrollView
                contentContainerStyle={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'flex-start'

                }}
            >
                <View
                    style={{
                        // flex: 1,
                        flexDirection: "row-reverse",
                        marginLeft: 24,
                        width: "100%",
                        marginTop: 16,
                        // marginRight: 16,
                    }}
                >
                    <View
                        style={{
                            marginRight: 16
                        }}
                    >
                        <Text style={{ color: '#00A7D3' }} variant="headlineSmall" >08/09/21</Text>
                        <Text style={{ color: '#757575' }} variant="headlineSmall" >8:41 Am</Text>
                    </View>
                    <View
                        style={{
                            flex: 1,

                        }}
                    >
                        <View>
                            <Text style={{ fontWeight: 'bold', color: '#00A7D3', marginBottom: 32 }} variant="headlineSmall" >Summary</Text>
                            <Text style={{ fontWeight: 'bold', color: 'white' }} variant="displayMedium" >Sigmoid Colectomy</Text>
                            <Text style={{ fontWeight: 'bold', color: '#757575', }} variant="bodyLarge" >Procedure</Text>
                        </View>

                        <View 
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                marginTop: 16
                            }}
                        >
                            <View>
                                <Text variant='headlineMedium'>R4G303</Text>
                                <Text style={{ fontWeight: 'bold', color: '#757575' }} variant='bodyLarge'>Case ID</Text>
                            </View>
                            <View
                                style={{
                                    marginLeft: 32
                                }}
                            >
                                <Text variant='headlineMedium'>49 min</Text>
                                <Text style={{ fontWeight: 'bold', color: '#757575' }} variant='bodyLarge'>Duration</Text>
                            </View>
                        </View>
                        
                        <View 
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                // justifyContent: 'space-evenly',
                                marginTop: 16,
                            }}
                        >
                            <View
                                style={{
                                    width: '50%',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Text variant='headlineSmall'>Teaching Case</Text>
                                <Text style={{ fontWeight: 'bold', color: '#757575' }} variant='bodyLarge'>Case Type</Text>
                            </View>
                            <View
                                style={{
                                    width: '50%',
                                    alignItems: 'flex-start',
                                }}
                            >
                                <Text variant='headlineSmall'>Complex</Text>
                                <Text style={{ fontWeight: 'bold', color: '#757575' }} variant='bodyLarge'>Complexity</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        // </SafeAreaView>
    )
}