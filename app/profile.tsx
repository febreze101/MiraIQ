

import { View } from "react-native"
import { Image } from "react-native"
import { Button, Text } from "react-native-paper"
import {Modal, Portal} from "react-native-paper"
import { useNavigation } from "expo-router"

export default function Profile() {
    const navigation = useNavigation()


    return (
        <>
                <View
                    style={{
                        alignItems: 'center',

                    }}
                >
                    <Text style={{ fontWeight: 'bold', color: '#3e3e3e' }}>PROFILE</Text>

                    {/* TODO: Replace with Avatar */}
                    <Image
                        source={require('../assets/images/profile.png')}
                        style={{ width: 120, height: 120, marginTop: 25 }}
                    />
                    <Text style={{ fontWeight: 'bold', color: '#3e3e3e' }} variant="headlineSmall">Welcome User!</Text>

                    <View
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            width: "80%",
                        }}
                    >
                        <Button 
                            mode="outlined" 
                            style={{ marginTop: 88 }} 
                            onPress={() => navigation.navigate('ProfileUpdates/profileUpdate')} 
                        >
                            Change Personal Info
                        </Button>

                        <Button 
                            mode="outlined" 
                            style={{ marginTop: 16 }} 
                            onPress={() => navigation.navigate('ProfileUpdates/profileEmailUpdate')} 
                        >
                             Change Email
                        </Button>

                        <Button 
                            mode="outlined" 
                            style={{ marginTop: 16 }} 
                            onPress={() => navigation.navigate('ProfileUpdates/profilePasswordUpdate')} 
                        >
                            Change Password
                        </Button>
                    </View>
                </View>
                
        </>
    )
}