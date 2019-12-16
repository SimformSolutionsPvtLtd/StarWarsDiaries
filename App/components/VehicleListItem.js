import React from 'react';
import ContentLoader, { Rect } from 'react-content-loader/native';
import PropTypes from 'prop-types';
import { Images } from '../assets';
import { Image, StyleSheet, Text, View } from 'react-native';
import styles from './styles/VehicleListItemStyles';
import { Card } from 'native-base';

const renderTextContainer = content => {
  const { name, model, vehicle_class, manufacturer, cost_in_credits } = content;
  return (
    <View style={styles.textContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.model} numberOfLines={1}>{`Model: ${model}`}</Text>
      <Text style={styles.manuf} numberOfLines={1}>
        {manufacturer}
      </Text>
      <Text
        style={styles.manuf}
        numberOfLines={1}
      >{`Class: ${vehicle_class}`}</Text>
      <Text style={styles.crew}>{`Cost: ${cost_in_credits} $`}</Text>
    </View>
  );
};

const renderImageContainer = () => {
  const random = Math.floor(Math.random() * 11 + 1);
  const imageName = `sw${random}`;
  const { imageContainer, container, image } = styles;
  return (
    <View style={imageContainer}>
      <View style={StyleSheet.absoluteFill}>
        <ContentLoader style={container}>
          <Rect x="0" y="0" rx="4" ry="4" width={'100%'} height="100%" />
        </ContentLoader>
      </View>
      <Image source={Images[imageName]} resizeMode={'cover'} style={image} />
    </View>
  );
};

/**
 * Vehicle list item component to display vehicles data
 *
 * @param {*} props
 * @returns Vehicle list item
 */
const VehicleListItem = props => {
  return (
    <Card style={styles.container}>
      {renderTextContainer(props.content)}
      {renderImageContainer()}
    </Card>
  );
};

VehicleListItem.propTypes = {
  content: PropTypes.object
};

export default VehicleListItem;
