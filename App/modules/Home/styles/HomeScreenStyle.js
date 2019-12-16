import { StyleSheet } from 'react-native';
import {
  ApplicationStyles,
  Colors,
  verticalScale,
  Fonts
} from '../../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  listContent: {
    backgroundColor: Colors.content,
    padding: verticalScale(15)
  },
  list: {
    flex: 1,
    backgroundColor: Colors.content
  },
  floatingButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    height: 56,
    width: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loaderContainer: {
    padding: 15,
    backgroundColor: Colors.content
  },
  loaderInnerContainer: {
    flex: 1
  },
  searchContainer: {
    width: '100%',
    height: verticalScale(50),
    paddingLeft: verticalScale(15),
    paddingRight: verticalScale(15)
  },
  search: {
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.regular
  },
  close: {
    color: Colors.primary,
    fontSize: 28
  },
  noDataText: {
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.regular,
    textAlign: 'center'
  }
});

export default styles;
