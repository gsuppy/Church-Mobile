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
  navigator: {
    backgroundColor: 'powderblue',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: 'steelblue',
  },
  imageContainer: {
    flex: 0.2,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  churchLogo: {
    flex: 0.8,
    backgroundColor: 'white',
    alignSelf: 'center',
    resizeMode: 'contain',
    padding: 10,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  aboutContainer: {
    width: '50%',
    height: '50%',
    backgroundColor: 'white',
  },
  sermonsContainer: {
    width: '50%',
    height: '50%',
    backgroundColor: 'green'
  },
  connectContainer: {
    width: '50%',
    height: '50%',
    backgroundColor: 'blue'
  },
  ministriesContainer: {
    width: '50%',
    height: '50%',
    backgroundColor: 'red'
  },
});

export default Styles; 