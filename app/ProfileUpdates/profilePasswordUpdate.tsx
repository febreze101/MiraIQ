import { Colors } from "@/constants/Colors";
import { useState } from "react"
import { View, useColorScheme } from "react-native"
import { Button, Text, TextInput } from "react-native-paper"

export default function ProfilePasswordUpdate() {

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
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
                <Text style={{ fontWeight: 'bold', marginTop: 16, marginBottom: 64 }} variant="displaySmall" >Change Password</Text>

                <View
                    style={{
                        width: '90%',
                    }}
                >
                    <TextInput
                        mode='flat'
                        label={'Old Password'}
                        value={oldPassword}
                        onChangeText={oldPassword => setOldPassword(oldPassword)}
                        style={{ marginBottom: 16 }}
                    />
                    
                    <TextInput
                        mode='flat'
                        label={'New Password'}
                        value={newPassword}
                        onChangeText={newPassword => setNewPassword(newPassword)}
                        right={
                            showPassword ?
                            <TextInput.Icon icon="eye" onPress={() => setShowPassword(!showPassword)}/> :
                            <TextInput.Icon icon="eye-off" onPress={() => setShowPassword(!showPassword)}/>
                        }
                        secureTextEntry={showPassword}
                        style={{ marginBottom: 16 }}
                    />
                    <TextInput
                        mode='flat'
                        label={'Confirm Password'}
                        value={confirmPassword}
                        onChangeText={confirmPassword => setConfirmPassword(confirmPassword)}
                        right={
                            showPassword ?
                            <TextInput.Icon icon="eye" onPress={() => setShowPassword(!showPassword)}/> :
                            <TextInput.Icon icon="eye-off" onPress={() => setShowPassword(!showPassword)}/>
                        }
                        secureTextEntry={showPassword}
                        style={{ marginBottom: 24 }}
                    />
                   
                    {/* TODO: add in actual functions to handle setting new password */}
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