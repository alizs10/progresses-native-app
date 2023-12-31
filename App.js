import { StyleSheet, StatusBar, Platform, View, Dimensions } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import GoalsScreen from './screens/GoalsScreen';

export default function App() {


  let screen = <GoalsScreen />;


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
