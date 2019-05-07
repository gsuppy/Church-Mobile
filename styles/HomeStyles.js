import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  body: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  imageContainer: {
    flex: 0.4,
    backgroundColor: 'white',
    justifyContent: 'center',    
    margin: 10,
  },
  churchLogo: {
    flex: 1,
    alignSelf: 'center',
    resizeMode: 'stretch',
  },
  gridContainer: {
    flex: 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  gridBoxes: {
    width: 150,
    height: 150,
  },
  gridText: {
    color: 'black',
    fontFamily: 'Avenir-Heavy',
  },
  aboutContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    backgroundColor: 'white',
  },
  sermonsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    backgroundColor: 'white',
  },
  connectContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    backgroundColor: 'white',
  },
  ministriesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    height: '50%',
    backgroundColor: 'white',
  },
});

export default Styles; 