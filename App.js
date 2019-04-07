import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import Styles from './Styles.js';

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  Profile: {screen: ProfileScreen},
});

const App = createAppContainer(MainNavigator);
export default App;

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={Styles.container}>
//         <Text style={Styles.welcome}>Church Mobile</Text>
//       </View>
//     );
//   }
// }