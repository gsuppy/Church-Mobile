import React, {Component} from 'react';
import {Text, View, Button, Image} from 'react-native';
import Styles from '../HomeStyles.js';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={Styles.body}>
        <View style={Styles.homeContainer}>
          <View style={Styles.imageContainer}>
          <Image
            source={require('../assets/church_building.jpg')}
            style={Styles.churchLogo}
          />
          </View>
          <View style={Styles.gridContainer}> 
            <View style={Styles.aboutContainer}>
              <Image
                source={require('../assets/bible.jpg')}
                style={Styles.gridBoxes}
              />
              <Text style={Styles.gridText}> What We Believe </Text>
            </View>

            <View style={Styles.sermonsContainer}>
              <Image
                source={require('../assets/sermon.jpg')}
                style={Styles.gridBoxes}
              />
              <Text style={Styles.gridText}> Sermons & Resources </Text>
            </View>

            <View style={Styles.connectContainer}>
              <Image
                source={require('../assets/connect.jpg')}
                style={Styles.gridBoxes}
              />
              <Text style={Styles.gridText}> Connect </Text>
            </View>

            <View style={Styles.ministriesContainer}>
              <Image
                source={require('../assets/ministries.jpg')}
                style={Styles.gridBoxes}
              />
              <Text style={Styles.gridText}> Ministries </Text>
            </View>
          </View>

        </View>
      </View>
    );
  }
}

export default HomeScreen;
