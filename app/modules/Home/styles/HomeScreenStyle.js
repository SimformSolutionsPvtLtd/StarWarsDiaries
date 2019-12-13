import { StyleSheet } from 'react-native';
import { ApplicationStyles, Colors, verticalScale } from '../../../theme';

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
  floating: {
    height: 24,
    width: 24,
  }
});

export default styles;
