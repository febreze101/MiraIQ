import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer"
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";
import { Avatar, Button } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Icon from '@mdi/react';
import { mdiAccountCircle } from '@mdi/js';
import { useNavigation } from "@react-navigation/native";

export default function CustomDrawer(props: any) {

    const router = useRouter();
    const navigation = useNavigation();
    const { top, bottom } = useSafeAreaInsets();

    return (
        <View style={{ flex: 1 }}>

            <DrawerContentScrollView
                {...props}
                scrollEnabled={false}
                contentContainerStyle={{ paddingTop: top }}
            >
                {/* profile pic and welcome message */}
                <View style={{ marginLeft: 16, marginBottom: 36 }}>
                    {/* <Image
                        source={require('../assets/images/profile.png')}
                        style={{ width: 68, height: 68, alignSelf: 'left', marginTop: 25 }}
                    /> */}
                    <Avatar.Icon size={68} icon="account" />
                    <Text style={{ fontWeight: 'bold', color: 'white'}} variant="headlineSmall">Welcome User!</Text>
                </View>

                {/* drawer items */}
                <DrawerItemList {...props} />

            </DrawerContentScrollView>

            <View
                style={{
                    paddingBottom: 16 + bottom
                }}
            >
                <DrawerItem
                    label={"Logout"}
                    onPress={() => navigation.navigate('login')}
                    activeBackgroundColor="#262626"
                    activeTintColor="#fff"
                    labelStyle={{ color: '#fff' }}
                />
                {/* <Text>Footer</Text> */}
            </View>
        </View>

    )
}