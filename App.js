import { StyleSheet, StatusBar, Platform, View, Dimensions } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GoalsScreen from './screens/GoalsScreen';
import NewProgressScreen from './screens/NewProgressScreen';
import NewRecordScreen from './screens/NewRecordScreen';
import ProfileScreen from './screens/ProfileScreen';

export default function App() {


  let screen = <HomeScreen />;


  return (
    <View style={styles.root}>
      {screen}
      <StatusBar backgroundColor='transparent' />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // paddingTop: (Platform.OS === 'android' && Dimensions.get('window').width > 380) ? StatusBar.currentHeight : 0
  },
});
