import { StyleSheet, StatusBar, Platform, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';

export default function App() {


  let screen = <HomeScreen />;


  return (
    <View style={styles.root}>
      {screen}
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
