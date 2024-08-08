import { Pressable, View } from "react-native";
import { Button, Divider, Text, TextInput } from "react-native-paper";
import { Link } from 'expo-router';
import { useState } from "react";
import { Image } from "react-native";
import { useNavigation } from "expo-router";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

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

                <View
                    style={{
                        width: "80%",
                        top: "50%",
                    }}
                >
                    <TextInput
                        mode="flat"
                        label={'Email'}
                        value={email}
                        onChangeText={email => setEmail(email)}
                        style={{ marginBottom: 16 }}
                    />
                    <TextInput
                        mode="flat"
                        value={password}
                        label={'password'}
                        right={
                            showPassword ?
                            <TextInput.Icon icon="eye" onPress={() => setShowPassword(!showPassword)}/> :
                            <TextInput.Icon icon="eye-off" onPress={() => setShowPassword(!showPassword)}/>
                        }
                        secureTextEntry={showPassword}
                        onChangeText={password => setPassword(password)}
                    />

                    <Button mode="contained" style={{ width: '100%', marginTop: 16 }} onPress={() => navigation.navigate('caseList')}>
                        <Text>Continue</Text>
                    </Button>

                    <Button style={{ marginTop: 16 }}>Forgot password?</Button>

                    <Divider style={{ marginTop: 32, marginBottom: 32 }} />

                    <Button mode='outlined' style={{ flexDirection: 'row', justifyContent: 'center', height: 56, alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image
                                source={require('../assets/images/search.png')}
                                style={{ width: 15, height: 15, marginRight: 10 }}
                            />
                            <Text style={{ color: 'black' }} >Continue with Google</Text>
                        </View>
                    </Button>
                    <Link href={"/signup"}></Link>
                    <Button>Don't have an account? Sign up!</Button>
                </View>
            </View>
        </>
    )
}