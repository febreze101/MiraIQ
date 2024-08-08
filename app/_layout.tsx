import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PaperProvider, MD3DarkTheme } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CustomDrawer from '@/components/CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderBackButton } from '@react-navigation/elements';

import Index from './index'
import Login from './login';
import CaseList from './caseList';
import Profile from './profile';
import Contact from './contact';
import ProfileUpdate from './ProfileUpdates/profileUpdate';
import ProfileEmailUpdate from './ProfileUpdates/profileEmailUpdate';
import ProfilePasswordUpdate from './ProfileUpdates/profilePasswordUpdate';
import CaseSummary from './CaseDetails/CaseSummary';
import CaseStats from './CaseDetails/caseStats';
import CaseVideoPage from './CaseDetails/caseVideoPage';
import CaseDetails from './CaseDetails/caseDetail';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


// TODO: add Theming
const theme = {
  ...MD3DarkTheme.colors 
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerActiveBackgroundColor: '#262626',
        drawerActiveTintColor: '#fff',
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
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" component={Index} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="ProfileUpdates/profileUpdate" component={ProfileUpdate} options={{ headerShown: true, headerBackButtonMenuEnabled: true, headerTitle: 'Back to Profile' }} />
          <Stack.Screen name="ProfileUpdates/profileEmailUpdate" component={ProfileEmailUpdate} options={{ headerShown: true, headerBackButtonMenuEnabled: true, headerTitle: 'Back to Profile' }} />
          <Stack.Screen name="ProfileUpdates/profilePasswordUpdate" component={ProfilePasswordUpdate} options={{ headerShown: true, headerBackButtonMenuEnabled: true, headerTitle: 'Back to Profile' }} />
          <Stack.Screen name="CaseDetails/caseDetail" component={CaseDetails} options={{ headerShown: true, headerBackButtonMenuEnabled: true, headerTitle: 'Back to Cases' }}/>

          {/* <Stack.Screen name="CaseDetails/CaseSummary" component={CaseSummary} options={{ headerShown: true, headerBackButtonMenuEnabled: true, headerTitle: 'Back to Cases' }} />
          <Stack.Screen name="CaseDetails/caseStats" component={CaseStats} options={{ headerShown: true, headerBackButtonMenuEnabled: true, headerTitle: 'Back to Cases' }} />
          <Stack.Screen name="CaseDetails/caseVideoPage" component={CaseVideoPage} options={{ headerShown: true, headerBackButtonMenuEnabled: true, headerTitle: 'Back to Cases' }} /> */}
          <Stack.Screen name="caseList" component={DrawerNavigator} />
        </Stack.Navigator>
      </PaperProvider>
    </GestureHandlerRootView>
  )
}
