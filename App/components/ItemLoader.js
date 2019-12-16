import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { View } from 'react-native';
import { verticalScale, Metrics } from '../theme';
import styles from './styles/ItemLoaderStyles';

/**
 *Placeholder item for loading state
 *
 * @returns item loader component like facebook loading
 */
const ItemLoader = () => {
  const textWidth = `${verticalScale(Metrics.screenWidth - 180)}`;
  const textX = `${verticalScale(15)}`;
  return (
    <View style={styles.cardContainer}>
      <ContentLoader>
        <Rect x={textX} y="12" rx="4" ry="4" width={textWidth} height="20" />
        <Rect x={textX} y="44" rx="3" ry="3" width={textWidth} height="17" />
        <Rect x={textX} y="72" rx="3" ry="3" width={textWidth} height="17" />
        <Rect x={textX} y="101" rx="3" ry="3" width={textWidth} height="17" />
        <Rect
          x={`${verticalScale(Metrics.screenWidth - 140)}`}
          y={`${verticalScale(12)}`}
          rx="3"
          ry="3"
          width={`${verticalScale(110)}`}
          height={`${verticalScale(110)}`}
        />
      </ContentLoader>
    </View>
  );
};

export default ItemLoader;
