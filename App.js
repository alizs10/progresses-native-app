import { StyleSheet, StatusBar, Platform, View, Dimensions, Text } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GoalsScreen from './screens/GoalsScreen';
import NewProgressScreen from './screens/NewProgressScreen';
import NewRecordScreen from './screens/NewRecordScreen';
import ProfileScreen from './screens/ProfileScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import BottomBar from './components/Home/Layout/BottomBar/BottomBar';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventProvider } from 'react-native-outside-press';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={props => <BottomBar {...props} />}

      sceneContainerStyle={{ backgroundColor: '#343a40' }}
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

export default function App() {

  return (
    <EventProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="HomeWithTabs"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#343a40',
            },
            headerTintColor: '#fff',
            headerShadowVisible: false
          }}
        >
          <Stack.Screen name="HomeWithTabs" component={MyTabs} options={{ headerShown: false }} />
          <Stack.Screen name="NewRecord" component={NewRecordScreen} options={{ title: 'New Record' }} />
          <Stack.Screen name="NewProgress" component={NewProgressScreen} options={{ title: 'New Progress' }} />
          {/* <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar backgroundColor={'transparent'} barStyle='tra' />
    </EventProvider>

  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // paddingTop: (Platform.OS === 'android' && Dimensions.get('window').width > 380) ? StatusBar.currentHeight : 0
  },
});
