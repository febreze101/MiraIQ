import { Colors } from '@/constants/Colors';
import { SafeAreaView, View, useColorScheme } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Divider, Text } from 'react-native-paper';

export default function CaseSummary() {

    const colorScheme = useColorScheme();

    return (
        // <SafeAreaView style={{ flex: 1 }} >
        <ScrollView
            contentContainerStyle={{
                flexGrow: 1,
                flexDirection: 'column',
                // justifyContent: 'flex-start',
                alignContent: 'center',
                padding: '5%',
            }}
        >
            <View style={{}}>
                <View
                    style={{
                        // flex: 1,
                        flexDirection: 'row',
                        width: '100%',
                        marginTop: 16,
                        justifyContent: 'space-between',
                    }}
                >
                    <View>
                        <Text
                            style={{ fontWeight: 'bold', marginBottom: 32, color: colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText,fontFamily: 'Poppins_500Medium', }}
                            variant="headlineSmall"
                            
                        >
                            SUMMARY
                        </Text>
                        <Text
                            style={{ fontWeight: 'bold', color: 'white', fontFamily: 'Poppins_500Medium', marginBottom: 8 }}
                            variant="displayMedium"
                        >
                            Sigmoid Colectomy
                        </Text>
                        <Text
                            style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                            variant="bodyLarge"
                        >
                            Procedure
                        </Text>
                    </View>
                    <View style={{}}>
                        <Text style={{ color: colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText, fontFamily: 'Poppins_500Medium', }} variant="headlineSmall" >
                            08/09/21
                        </Text>
                        <Text style={{ color: '#757575', fontFamily: 'Poppins_500Medium', }} variant="headlineSmall">
                            8:41 AM
                        </Text>
                    </View>
                </View>

                {/* Basic summary information */}
                <View style={{ display: 'flex' }}>
                    {/* Case ID and Duration */}
                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop: 16,
                        }}
                    >
                        <View>
                            <Text variant="headlineMedium" style={{fontFamily: 'Poppins_500Medium'}}>R4G303</Text>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Case ID
                            </Text>
                        </View>
                        <View style={{ marginLeft: 32 }}>
                            <Text variant="headlineMedium" style={{fontFamily: 'Poppins_500Medium',}}>49 min</Text>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Duration
                            </Text>
                        </View>
                    </View>

                    {/* Case type and complexity */}
                    <View
                        style={{
                            // flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            // borderWidth: 5,
                            justifyContent: 'space-between',
                            marginTop: 16,
                            alignContent: 'center',
                            // borderColor: 'red'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'beige'
                            }}
                        >
                            <Text variant="headlineSmall" style={{fontFamily: 'Poppins_500Medium',}}>Teaching Case</Text>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Case Type
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                
                                // borderWidth: 5,
                                // borderColor: 'pink',
                            }}
                        >
                            <Text variant="headlineSmall" style={{fontFamily: 'Poppins_500Medium',}}>Complex</Text>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Complexity
                            </Text>
                        </View>
                    </View>

                    {/* Tumor type and BMI  */}
                    <View
                        style={{
                            // flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            // borderWidth: 5,
                            justifyContent: 'space-between',
                            marginTop: 16,
                            alignContent: 'center',
                            
                            // borderColor: 'red'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'beige'
                            }}
                        >
                            <Text variant="headlineSmall" style={{fontFamily: 'Poppins_500Medium',}}>Malignant</Text>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Tumor Type
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'pink',
                            }}
                        >
                            <Text variant="headlineSmall" style={{fontFamily: 'Poppins_500Medium',}}>123</Text>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                BMI
                            </Text>
                        </View>
                    </View>

                    {/* Edit Notes Button */}
                    <View style={{ marginTop: 16 }}>
                        <Button mode="outlined" labelStyle={{fontFamily: 'Poppins_500Medium',}}>Edit Notes</Button>
                    </View>

                    {/* Divider */}
                    <Divider bold style={{ marginTop: 32, marginBottom: 32 }} />
                </View>

                {/* Details Section */}
                <View style={{ display: 'flex' }}>
                    <Text
                        style={{ fontWeight: 'bold', color: colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText, marginBottom: 16, fontFamily: 'Poppins_500Medium', }}
                        variant="headlineSmall"
                    >
                        DETAILS
                    </Text>

                    {/* Average Speed */}
                    <View
                        style={{
                            // flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            // borderWidth: 5,
                            justifyContent: 'space-between',
                            marginTop: 16,
                            alignContent: 'center',
                            // borderColor: 'red'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'beige'
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text variant="headlineLarge" style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium', }}>
                                    18.66{' '}
                                </Text>
                                <Text
                                    variant="headlineSmall"
                                    style={{ alignSelf: 'flex-end', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                >
                                    mm/s
                                </Text>
                            </View>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Average Speed Left
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'pink',
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text variant="headlineLarge" style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium', }}>
                                    18.81{' '}
                                </Text>
                                <Text
                                    variant="headlineSmall"
                                    style={{ alignSelf: 'flex-end', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                >
                                    mm/s
                                </Text>
                            </View>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Average Speed Right
                            </Text>
                        </View>
                    </View>

                    {/* Cautory */}
                    <View
                        style={{
                            // flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            // borderWidth: 5,
                            justifyContent: 'space-between',
                            marginTop: 16,
                            alignContent: 'center',
                            // borderColor: 'red'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'beige'
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text variant="headlineLarge" style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium', }}>
                                    0.86{' '}
                                </Text>
                                <Text
                                    variant="headlineSmall"
                                    style={{ alignSelf: 'flex-end', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                >
                                    cycles/min
                                </Text>
                            </View>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Monopolar
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'pink',
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text variant="headlineLarge" style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium', }}>
                                    2.08{' '}
                                </Text>
                                <Text
                                    variant="headlineSmall"
                                    style={{ alignSelf: 'flex-end', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                >
                                    cycles/min
                                </Text>
                            </View>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Bipolar
                            </Text>
                        </View>
                    </View>

                    {/* Avg tool position section */}

                    <Text
                        style={{
                            fontWeight: 'bold',
                            color: colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText,
                            marginBottom: 16,
                            marginTop: 32,
                            fontFamily: 'Poppins_500Medium',
                        }}
                        variant="headlineSmall"
                    >
                        AVG TOOL POSITION
                    </Text>

                    {/* Average Speed */}
                    <View
                        style={{
                            // flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            // borderWidth: 5,
                            justifyContent: 'space-between',
                            marginTop: 16,
                            alignContent: 'center',
                            // borderColor: 'red'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'beige'
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text variant="headlineLarge" style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium', }}>
                                    85.30{' '}
                                </Text>
                                <Text
                                    variant="headlineSmall"
                                    style={{ alignSelf: 'flex-end', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                >
                                    mm
                                </Text>
                            </View>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Left X
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'pink',
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text variant="headlineLarge" style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium', }}>
                                    92.78{' '}
                                </Text>
                                <Text
                                    variant="headlineSmall"
                                    style={{ alignSelf: 'flex-end', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                >
                                    mm
                                </Text>
                            </View>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Right X
                            </Text>
                        </View>
                    </View>

                    {/* Cautory */}
                    <View
                        style={{
                            // flex: 1,
                            width: '100%',
                            flexDirection: 'row',
                            // borderWidth: 5,
                            justifyContent: 'space-between',
                            marginTop: 16,
                            alignContent: 'center',
                            // borderColor: 'red'
                        }}
                    >
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'beige'
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text variant="headlineLarge" style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium', }}>
                                    0.86{' '}
                                </Text>
                                <Text
                                    variant="headlineSmall"
                                    style={{ alignSelf: 'flex-end', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                >
                                    mm
                                </Text>
                            </View>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Left Y
                            </Text>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                width: '50%',
                                alignItems: 'flex-start',
                                // borderWidth: 5,
                                // borderColor: 'pink',
                            }}
                        >
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                                <Text variant="headlineLarge" style={{ fontWeight: 'bold', fontFamily: 'Poppins_500Medium', }}>
                                    2.08{' '}
                                </Text>
                                <Text
                                    variant="headlineSmall"
                                    style={{ alignSelf: 'flex-end', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                >
                                    mm
                                </Text>
                            </View>
                            <Text
                                style={{ fontWeight: 'bold', color: '#757575', fontFamily: 'Poppins_500Medium', }}
                                variant="bodyLarge"
                            >
                                Right Y
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>

        // </SafeAreaView>
    );
}
