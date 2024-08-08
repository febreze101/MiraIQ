import { useState } from "react"
import { View } from "react-native"
import { Text, TextInput, Button } from "react-native-paper"

export default function ProfileUpdate() {
    const [newName, setNewName] = useState('')
    const [newLastName, setNewLastName] = useState('')

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
                <Text style={{ color: '#3e3e3e', fontWeight: 'bold', marginTop: 16, marginBottom: 64 }} variant="displaySmall" >Change Personal Information</Text>

                <View
                    style={{
                        width: '90%',
                    }}
                >

                    <TextInput
                        mode='flat'
                        label={'First Name'}
                        value={newName}
                        style={{ marginBottom: 16 }}
                        onChangeText={newName => setNewName(newName)}
                    />

                    <TextInput
                        mode='flat'
                        label={'Last Name'}
                        value={newLastName}
                        style={{ marginBottom: 16 }}
                        onChangeText={newLastName => setNewLastName(newLastName)}
                    />

                    {/* TODO: add in actual functions to handle setting new profile updates */}
                    <Button
                        mode="contained"
                        style={{
                            marginBottom: 16
                        }}
                    >
                        Save Changes
                    </Button>
                    <Button
                        mode="outlined"
                    >
                        Cancel
                    </Button>
                </View>
            </View>


        </>


    )
} 