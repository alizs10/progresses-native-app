// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';

import { StyleSheet, StatusBar, Platform, View, Dimensions, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GoalsScreen from './screens/GoalsScreen';
import ProfileScreen from './screens/ProfileScreen';
import BottomBar from './components/Home/Layout/BottomBar/BottomBar';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventProvider } from 'react-native-outside-press';
import CreateDataScreen from './screens/CreateDataScreen';
import ViewDataScreen from './screens/ViewDataScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Menu from './components/Home/Menu/Menu';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';
import CreateLabelScreen from './screens/CreateLabelScreen';
import EditLabelScreen from './screens/EditLabelScreen';
import EditDataScreen from './screens/EditDataScreen';
import TrashcanScreen from './screens/TrashcanScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={props => <BottomBar {...props} />}

      sceneContainerStyle={{ backgroundColor: '#0F1012' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="FinishedProgresses"
        component={HomeScreen}
      />
      <Tab.Screen
        name="UnfinishedProgresses"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Records"
        component={HomeScreen}
      />
    </Tab.Navigator>
  )
}

function MyStack() {

  return (
    <View style={styles.root}>
      <Stack.Navigator
        initialRouteName="HomeWithTabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0F1012',
          },
          headerTintColor: '#fff',
          headerShadowVisible: false,
        }}

      >
        <Stack.Screen name="HomeWithTabs" component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen
          name="CreateData"
          component={CreateDataScreen}
          options={{ title: 'Create New Data' }}
        />
        <Stack.Screen
          name="EditData"
          component={EditDataScreen}
          options={{ title: 'Edit Data' }}
        />
        <Stack.Screen
          name="ViewData"
          component={ViewDataScreen}
          options={{ title: 'View Data' }}
        />
        <Stack.Screen
          name="CreateLabel"
          component={CreateLabelScreen}
          options={{ title: 'Create New Label' }}
        />
        <Stack.Screen
          name="EditLabel"
          component={EditLabelScreen}
          options={{ title: 'Edit Label' }}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
        <Stack.Screen name="Goals" component={GoalsScreen} options={{ title: 'Goals' }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
        <Stack.Screen name="Trashcan" component={TrashcanScreen} options={{ title: 'Trashcan' }} />
        {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </View>
  )
}


export default function App() {

  return (
    <EventProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerStyle: {
              backgroundColor: 'transparent',
            }
          }}
          drawerContent={(props) => <Menu {...props} />}
        >
          <Drawer.Screen name="HomeWithDrawer" component={MyStack} />

        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
        animated={true}
      />
    </EventProvider>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#0F1012',
    // paddingTop: (Platform.OS === 'android' && Dimensions.get('window').width > 380) ? StatusBar.currentHeight : 0
  },
});
