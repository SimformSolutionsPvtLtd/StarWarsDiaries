import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import { Image, StyleSheet, Text, View } from 'react-native';
import styles from './styles/VehicleListItemStyles';

const renderTextContainer = (props) => {
  const { name, model, vehicle_class, manufacturer, cost_in_credits } = props.content;
  return (
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.model} numberOfLines={1}>{`Model: ${model}`}</Text>
      <Text style={styles.manuf} numberOfLines={1}>{manufacturer}</Text>
      <Text style={styles.manuf} numberOfLines={1}>{`Class: ${vehicle_class}`}</Text>
      <Text style={styles.crew}>{`Cost: ${cost_in_credits} $`}</Text>
    </View>
  )
}

const renderImageContainer = () => {
  const imageUrl = 'https://source.unsplash.com/random/300x200/?car'
  const { imageContainer, container, image } = styles;
  return (
    <View style={imageContainer}>
      <View style={StyleSheet.absoluteFill}>
        <ContentLoader style={container}>
          <Rect x="0" y="0" rx="4" ry="4" width={'100%'} height="100%" />
        </ContentLoader>
      </View>
      <Image
        source={{ uri: imageUrl, cache: 'reload' }}
        resizeMode={'cover'}
        style={image}
      />
    </View>
  )
}

const VehicleListItem = (props) => {
  return (
    <View style={styles.container}>
      {renderTextContainer(props)}
      {renderImageContainer()}
    </View >
  );
}

export default VehicleListItem;