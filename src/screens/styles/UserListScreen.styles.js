import {StyleSheet} from 'react-native';
import {appBackgroundColor} from '../../theme/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: appBackgroundColor,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    height: 150,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});

export default styles;
