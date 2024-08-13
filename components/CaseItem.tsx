import { Colors } from '@/constants/Colors';
import { useNavigation } from 'expo-router';
import { TouchableHighlight, View, useColorScheme } from 'react-native';
import { Button, Icon, Text } from 'react-native-paper';

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

    return (
        <>
            <TouchableHighlight
                underlayColor="#DDDDDD"
                style={{
                    flex: 1,
                    flexDirection: 'row',
                    borderWidth: 1,
                    height: 112,
                    marginBottom: 8,
                    borderColor: colorScheme === 'dark' ? 'rgba(24, 24, 50, 1)' : Colors.light.colors.primary,
                    borderRadius: 8,
                    width: '100%',
                    padding: 16,
                    backgroundColor: colorScheme === 'dark' ? 'rgba(24, 24, 41, 1)' : 'white',
                }}
                onPress={() => navigation.navigate('CaseDetails/caseDetail')}
            >
                <View
                    style={{
                        // flex: 1,
                        width: '80%',
                    }}
                >
                    {/* Case Type */}
                    <Text style={{ fontWeight: 'bold', color: colorScheme === 'dark' ? 'white' : 'black' }} variant="headlineSmall">
                        {type}
                    </Text>

                    {/* Case Info */}
                    <View
                        style={{
                            flex: 1,
                            flexDirection: 'row',
                            width: '100%',
                            marginTop: 8,
                        }}
                    >
                        <Text
                            style={{
                                color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText,
                            }}
                        >
                            Duration: {duration} min
                        </Text>
                        <Text
                            style={{
                                marginLeft: 16,
                                color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText,
                            }}
                        >
                            Case ID: {id}
                        </Text>
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
                        <Text
                            style={{
                                color:
                                    colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText,
                            }}
                        >
                            {date}
                        </Text>
                        <Text
                            style={{
                                marginLeft: 16,
                                color: colorScheme === 'dark' ? Colors.dark.colors.tertiaryText : Colors.light.colors.tertiaryText,
                            }}
                        >
                            {time}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
        </>
    );
}
