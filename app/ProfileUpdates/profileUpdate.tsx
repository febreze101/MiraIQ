import { Colors } from "@/constants/Colors"
import { useState } from "react"
import { View, useColorScheme } from "react-native"
import { Text, TextInput, Button } from "react-native-paper"

export default function ProfileUpdate() {
    const [newName, setNewName] = useState('')
    const [newLastName, setNewLastName] = useState('')
    const colorScheme = useColorScheme();

    return (
        <>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: "flex-start",
                    alignItems: "center",
                    backgroundColor: colorScheme === "dark" ? Colors.dark.colors.surface : Colors.light.colors.surface 
                }}
            >
                <Text style={{ fontWeight: 'bold', marginTop: 16, marginBottom: 64 }} variant="displaySmall" >Change Personal Information</Text>

                <View
                    style={{
                        width: '90%',
                        // justifyContent: "center",
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