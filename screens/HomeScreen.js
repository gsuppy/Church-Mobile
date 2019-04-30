import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import Styles from '../Styles.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.body}>
        <View style={Styles.navigator}>
          <Button
            title='Go to Your Profile'
            onPress={() => navigate('Profile', {name: 'Jane'})}
          />        
        </View>
        <View style={Styles.homeContainer}>

          <View style={Styles.imageContainer}>
          <Image
            source={require('../assets/chbc_logo.png')}
            style={Styles.churchLogo}
          />
          </View>

          <View style={Styles.gridContainer}> 
            <View style={Styles.aboutContainer}>
              <Text> About Us </Text>
            </View>

            <View style={Styles.sermonsContainer}>
              <Text> Sermons & Resources </Text>
            </View>

            <View style={Styles.connectContainer}>
              <Text> Connect </Text>
            </View>

            <View style={Styles.ministriesContainer}>
              <Text> Ministries </Text>
            </View>
          </View>

        </View>



      </View>
    );
  }
}

export default HomeScreen;
