import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'column',
  },
  topContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  topText: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Avenir-Heavy',
  },
  topImage: {
    margin: 10,
    height: 150,
    width: 150,
    borderRadius: 150 / 2,
  },
  bottomContainer: {
    flex: 1,
    backgroundColor: 'black',
  }
});

export default Styles; 