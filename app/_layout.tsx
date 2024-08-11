import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider, DefaultTheme, MD3DarkTheme, MD3LightTheme } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomDrawer from '@/components/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useColorScheme } from 'react-native';
import { Colors } from '@/constants/Colors';


import Index from './index'
import Login from './login';
import CaseList from './caseList';
import Profile from './profile';
import Contact from './contact';
import ProfileUpdate from './ProfileUpdates/profileUpdate';
import ProfileEmailUpdate from './ProfileUpdates/profileEmailUpdate';
import ProfilePasswordUpdate from './ProfileUpdates/profilePasswordUpdate';
import CaseDetails from './CaseDetails/caseDetail';
import { useEffect } from 'react';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


// TODO: add Theming
const darkTheme = {
  ...MD3DarkTheme, // or MD3LightTheme
  roundness: 2,
  custom: 'property',
  colors: {
    // ...MD3LightTheme.colors,
    primary: 'rgba(0, 167, 211, 1)',             // blue
    background: '#0a0a0a',     // black
    primaryTextColor: '#FFFFFF',    // white
    secondaryTextColor: '#9E9E9E',  // grey
    teriaryTextColor: '#00A7D3',    // blue
  },
};

const lightTheme = {
  ...MD3DarkTheme, // or MD3LightTheme
  roundness: 5,
  custom: 'property',
  colors: {
    // ...MD3LightTheme.colors,
    primary: '#feab51',             // orange
    background: '#0a0a0a',     // black
    primaryTextColor: '#FFFFFF',    // white
    secondaryTextColor: '#9E9E9E',  // grey
    teriaryTextColor: '#00A7D3',    // blue
  },
};

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerStyle: {
          backgroundColor: '#232323',
        },
        headerStyle: { backgroundColor: Colors.dark.colors.surface },
        drawerActiveBackgroundColor: 'rgba(0, 167, 211, 1)',
        drawerActiveTintColor: '#fff',
        headerTintColor: '#fff',
        drawerInactiveTintColor: 'white'
      }}
    >
      <Drawer.Screen
        name="CaseList"
        component={CaseList}
        options={{ drawerLabel: 'Case List', headerTitle: '' }}
      />

      <Drawer.Screen
        name="Contact"
        component={Contact}
        options={{ drawerLabel: 'Contact', headerTitle: '' }}
      />

      <Drawer.Screen
        name="Profile"
        component={Profile}
        options={{ drawerLabel: 'Profile', headerTitle: '' }}
      />

      {/* Add more Drawer.Screen components here as needed */}
    </Drawer.Navigator>
  );
}

export default function RootLayout() {

  const colorScheme = useColorScheme();

  const paperTheme =
    colorScheme === "dark"
      ? { ...MD3DarkTheme, colors: Colors.dark }
      : { ...MD3LightTheme, colors: Colors.light };

  useEffect(() => {
    console.log(colorScheme)
  })



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider
        // theme={colorScheme === "dark" ? darkTheme.colors : lightTheme.colors}
        theme={paperTheme.colors}
      >
        {/* <NavigationContainer> */}
        <Stack.Navigator screenOptions={{ headerShown: false, headerStyle: { backgroundColor: '#9E9E9E', } }}>
          <Stack.Screen name="index" component={Index} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen
            name="ProfileUpdates/profileUpdate"
            component={ProfileUpdate}
            options={{ 
              headerShown: true, 
              headerBackButtonMenuEnabled: true, 
              headerTitle: 'Back to Profile', 
              headerStyle: { backgroundColor: colorScheme === "dark" ? Colors.dark.colors.surface : Colors.light.colors.surface }, 
              headerTintColor: '#fff', 
            }}
          />
          <Stack.Screen
            name="ProfileUpdates/profileEmailUpdate"
            component={ProfileEmailUpdate}
            options={{ 
              headerShown: true, 
              headerBackButtonMenuEnabled: true, 
              headerTitle: 'Back to Profile', 
              headerStyle: { backgroundColor: colorScheme === "dark" ? Colors.dark.colors.surface : Colors.light.colors.surface }, 
              headerTintColor: '#fff', 
            }}
          />
          <Stack.Screen
            name="ProfileUpdates/profilePasswordUpdate"
            component={ProfilePasswordUpdate}
            options={{ 
              headerShown: true, 
              headerBackButtonMenuEnabled: true, 
              headerTitle: 'Back to Profile', 
              headerStyle: { backgroundColor: colorScheme === "dark" ? Colors.dark.colors.surface : Colors.light.colors.surface }, 
              headerTintColor: '#fff', 
            }}
          />
          <Stack.Screen
            name="CaseDetails/caseDetail" component={CaseDetails}
            options={{ 
              headerShown: true, 
              headerBackButtonMenuEnabled: true, 
              headerTitle: 'Back to Cases', 
              headerStyle: { backgroundColor: colorScheme === "dark" ? Colors.dark.colors.surface : Colors.light.colors.surface }, 
              headerTintColor: '#fff', 
            }}
          />
          <Stack.Screen
            name="caseList" component={DrawerNavigator}
          />
        </Stack.Navigator>
        {/* </NavigationContainer> */}
      </PaperProvider>
    </GestureHandlerRootView>
  )
}
