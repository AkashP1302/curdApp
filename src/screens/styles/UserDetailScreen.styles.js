import {StyleSheet} from 'react-native';
import {
  appBackgroundColor,
  appColor,
  dangerColor,
  offBlackColor,
  whiteColor,
} from '../../theme/appTheme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appBackgroundColor,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: appColor,
  },
  errorText: {
    color: dangerColor,
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
  },
  card: {
    backgroundColor: offBlackColor,
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    position: 'relative',
  },
  editButton: {
    position: 'absolute',
    top: 15,
    right: 15,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: appColor,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 5,
    zIndex: 10,
    elevation: 5,
  },
  editText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: appColor,
  },
  subtitle: {
    fontSize: 16,
    color: whiteColor,
  },
  divider: {
    height: 1,
    backgroundColor: '#ddd',
    marginVertical: 10,
  },
  section: {
    marginTop: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: appColor,

    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    color: whiteColor,
    marginLeft: 8,
  },
});

export default styles;
