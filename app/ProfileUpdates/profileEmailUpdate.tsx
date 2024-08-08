import { useNavigation } from "expo-router";
import { useState } from "react"
import { View } from "react-native"
import { Text, TextInput, Button } from "react-native-paper"

export default function ProfileEmailUpdate() {
    const [oldEmail, setOldEmail] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const navigation = useNavigation();

    return (
        <>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text style={{ color: '#3e3e3e', fontWeight: 'bold', marginTop: 16, marginBottom: 64 }} variant="displaySmall" >Change Email</Text>

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