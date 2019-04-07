import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profle",
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Home"
        onPress={() => navigate('Home', {name: 'Jane'})}
      />
    );
  }
}

export default ProfileScreen;
