import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class DirectoryScreen extends React.Component {
  static navigationOptions = {
    title: "Directory",
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text> Directory </Text>
      </View>
    );
  }
}

export default DirectoryScreen;
