import {StyleSheet} from 'react-native';
import {offBlackColor} from '../../theme/appTheme';

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.37)',
    justifyContent: 'flex-end',
  },
  container: {
    width: '100%',
    backgroundColor: offBlackColor,
    borderTopRightRadius: 26,
    borderTopLeftRadius: 26,
    padding: 16,
  },
});
export default styles;
