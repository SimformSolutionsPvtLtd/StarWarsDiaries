import { StyleSheet } from 'react-native';
import { Colors, Fonts, verticalScale } from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: verticalScale(150),
    backgroundColor: Colors.white,
    marginBottom: verticalScale(12),
    borderRadius: 6,
    padding: verticalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  imageContainer: {
    width: verticalScale(110),
    height: '100%',
    borderRadius: 5,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  name: {
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.bold
  },
  model: {
    fontSize: Fonts.size.medium,
    fontFamily: Fonts.type.regular,
    color: Colors.lightBlue
  },
  crew: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.regular
  },
  manuf: {
    fontSize: Fonts.size.small,
    fontFamily: Fonts.type.regular,
    color: Colors.primary
  }
});

export default styles;
