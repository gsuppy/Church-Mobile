import React, {Component} from 'react';
import {Image, View, Button, Text} from 'react-native';
// import { Container, Header, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
import Styles from '../styles/ProfileStyles.js';

class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: "Profle",
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.container}>
        <View style={Styles.topContainer}>
          <Text style={Styles.topText}> Profile </Text>
          <Image
            source={require('../assets/profile.jpg')}
            style={Styles.topImage}
          />  
        </View>

        <View style={Styles.bottomContainer}>
          <Switch />
        </View>
      </View>
    );
  }
}

export default ProfileScreen;
