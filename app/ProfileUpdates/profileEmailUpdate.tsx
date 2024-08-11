import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useState } from "react"
import { View, useColorScheme } from "react-native"
import { Text, TextInput, Button } from "react-native-paper"

export default function ProfileEmailUpdate() {
    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const navigation = useNavigation();
    const colorScheme = useColorScheme();

    return (
        <>
            <View
                style={{
                    // display: 'flex',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                    alignItems: "center",
                    // height: "100%",
                    backgroundColor: colorScheme === "dark" ? Colors.dark.colors.surface : Colors.light.colors.surface 
                }}
            >
                <Text style={{ fontWeight: 'bold', marginTop: 16, marginBottom: 64 }} variant="displaySmall" >Change Email</Text>

                <View
                    style={{
                        width: '90%',
                    }}
                >

                    <TextInput
                        mode='flat'
                        label={'Old Email'}
                        value={oldEmail}
                        style={{ marginBottom: 16 }}
                        onChangeText={oldEmail => setOldEmail(oldEmail)}
                    />

                    <TextInput
                        mode='flat'
                        label={'New Email'}
                        value={newEmail}
                        style={{ marginBottom: 16 }}
                        onChangeText={newEmail => setNewEmail(newEmail)}
                    />
                    
                    {/* TODO: add in actual functions to handle setting new email */}
                    <Button
                        mode="contained"
                        onPress={() => navigation.goBack()}
                        style={{
                            marginBottom: 16
                        }}
                    >
                        Save Changes
                    </Button>
                    <Button
                        mode="outlined"
                        onPress={() => navigation.goBack()}
                    >
                        Cancel
                    </Button>
                </View>
            </View>



        
        </>


    )
} 