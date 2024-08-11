

import { View, useColorScheme } from "react-native"
import { Image } from "react-native"
import { Avatar, Button, Text } from "react-native-paper"
import {Modal, Portal} from "react-native-paper"
import { useNavigation } from "expo-router"
import { Colors } from "@/constants/Colors"

export default function Profile() {
    const navigation = useNavigation()
    const colorScheme = useColorScheme();

    return (
        <>
                <View
                    style={{
                        alignItems: 'center',
                        height: "100%",
                        backgroundColor: colorScheme === "dark" ? Colors.dark.colors.surface : Colors.light.colors.surface 
                    }}
                >
                    <Text style={{ marginTop: 32, marginBottom: 32, fontWeight: 'bold', color: colorScheme === 'dark' ? Colors.dark.colors.secondaryText : Colors.light.colors.secondaryText }}>P R O F I L E</Text>


                    <Avatar.Icon style={{marginBottom: 16}} size={120} icon="account" />
                    <Text style={{ fontWeight: 'bold' }} variant="headlineSmall">Welcome User!</Text>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: "80%",
                        }}
                    >
                        <Button 
                            mode="outlined" 
                            style={{ marginTop: 80 }} 
                            onPress={() => navigation.navigate('ProfileUpdates/profileUpdate')} 
                        >
                            Change Personal Info
                        </Button>

                        <Button 
                            mode="outlined" 
                            style={{ marginTop: 24 }} 
                            onPress={() => navigation.navigate('ProfileUpdates/profileEmailUpdate')} 
                        >
                             Change Email
                        </Button>

                        <Button 
                            mode="outlined" 
                            style={{ marginTop: 24 }} 
                            onPress={() => navigation.navigate('ProfileUpdates/profilePasswordUpdate')} 
                        >
                            Change Password
                        </Button>
                    </View>
                </View>
                
        </>
    )
}