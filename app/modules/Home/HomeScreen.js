import { Container } from 'native-base';
import React from 'react';
import { ActivityIndicator, FlatList, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { CustomHeader, ItemLoader, VehicleListItem } from '../../components';
import HomeAction from '../../redux/HomeRedux';
import { Colors, Icons } from '../../theme';
import styles from './styles/HomeScreenStyle';
class HomeScreen extends React.Component {
  constructor(props) {
    super(props)
    this.page = 1;
  }

  componentDidMount() {
    this.props.getAllVehicles(this.page);
  }

  renderItem = ({ item }) => {
    const { fetching } = this.props;
    return (
      <VehicleListItem content={item} fetching={fetching} />
    )
  }

  handleLoadMore = () => {
    const { fetching, getAllVehicles } = this.props;
    if (!fetching) {
      this.page = this.page + 1;
      getAllVehicles(this.page);
    }
  }

  renderFooter = () => {
    if (!this.props.fetching) return null;
    return (
      <ActivityIndicator style={{ color: Colors.primary }} />
    );
  };

  renderList() {
    const { fetching, vehicles } = this.props;
    return (
      <FlatList
        style={styles.list}
        keyExtractor={(item) => item.name}
        contentContainerStyle={styles.listContent}
        data={vehicles}
        renderItem={this.renderItem}
        onEndReachedThreshold={0.4}
        onEndReached={this.handleLoadMore}
        ListFooterComponent={this.renderFooter}
      />
    )
  }

  renderFloatingButton() {
    return (
      <TouchableOpacity style={styles.floatingButton} activeOpacity={0.7}>
        <Image source={Icons.filter} style={styles.floating} />
      </TouchableOpacity>
    )
  }

  renderHeader() {
    return (
      <CustomHeader title={'Vehicles'} />
    )
  }

  renderLoader() {
    if (this.props.fetching && this.page === 1) {
      return (
        <View style={[StyleSheet.absoluteFill, { padding: 15, backgroundColor: Colors.content }]}>
          <View style={{ flex: 1, backgroundColor: Colors.content }}>
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
            <ItemLoader />
          </View>
        </View>
      )
    }
    return null
  }

  render() {
    return (
      <Container style={styles.mainContainer}>
        {this.renderHeader()}
        <View style={styles.mainContainer}>
          {this.renderList()}
          {this.renderLoader()}
          {this.renderFloatingButton()}
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  vehicles: state.home.vehicles,
  fetching: state.home.fetching,
  error: state.home.error
})

const mapDispatchToProps = dispatch => ({
  getAllVehicles: (page) => dispatch(HomeAction.vehicleRequest(page))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);

