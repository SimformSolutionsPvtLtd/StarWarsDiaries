import { StyleSheet } from 'react-native';
import { Colors, scale, verticalScale, Fonts } from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginBottom: verticalScale(15),
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardContainer: {
    backgroundColor: Colors.content
  }
});

export default styles;
