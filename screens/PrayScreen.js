import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class PrayScreen extends React.Component {
  static navigationOptions = {
    title: "Pray",
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text> Pray </Text>
      </View>
    );
  }
}

export default PrayScreen;
