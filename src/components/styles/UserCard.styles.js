import {StyleSheet} from 'react-native';
import {
  appBackgroundColor,
  borderColor,
  dangerColor,
  offBlackColor,
  offWhiteColor,
  whiteColor,
} from '../../theme/appTheme';

const styles = StyleSheet.create({
  card: {
    backgroundColor: offBlackColor,
    paddingVertical: 30,
    paddingHorizontal: 15,
    marginVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: borderColor,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    color: whiteColor,
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: offWhiteColor,
  },
  deleteButton: {
    backgroundColor: dangerColor,
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '85%',
    borderRadius: 8,
    marginTop: 9,
    marginLeft: 8,
  },
  deleteText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
