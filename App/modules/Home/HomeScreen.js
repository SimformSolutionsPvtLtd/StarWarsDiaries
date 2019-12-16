import _ from 'lodash';
import { Button, Container, Icon, Input, Item, Text } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  StyleSheet,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { Strings } from '../../constants';
import { CustomHeader, ItemLoader, VehicleListItem } from '../../components';
import HomeAction from '../../redux/HomeRedux';
import { Colors } from '../../theme';
import styles from './styles/HomeScreenStyle';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;
    this.state = {
      vehicles: [],
      filteredVehicles: [],
      searchedText: ''
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (!_.isEqual(props.vehicles, state.vehicles)) {
      const newData = props.vehicles.filter(item => {
        return item.name
          .toLowerCase()
          .includes(state.searchedText.toLowerCase());
      });
      return { vehicles: props.vehicles, filteredVehicles: newData };
    }
    return null;
  }

  componentDidMount() {
    this.props.getAllVehicles(this.page);
  }

  renderItem = ({ item }) => {
    const { fetching } = this.props;
    return <VehicleListItem content={item} fetching={fetching} />;
  };

  //load more vehicles - When user scroll down load more vehicles data.
  handleLoadMore = () => {
    const { fetching, getAllVehicles, haveMore } = this.props;
    if (!fetching && haveMore) {
      this.page = this.page + 1;
      getAllVehicles(this.page);
    }
  };

  onSearchChange = text => {
    const { vehicles } = this.state;
    const newData = vehicles.filter(item => {
      return item.name.toLowerCase().includes(text.toLowerCase());
    });
    this.setState({ filteredVehicles: [...newData], searchedText: text });
  };

  onCancelPress = () => {
    Keyboard.dismiss();
    this.setState({ searchedText: '', filteredVehicles: this.state.vehicles });
  };

  renderFooter = () => {
    if (!this.props.fetching) {
      return null;
    }
    return <ActivityIndicator style={{ color: Colors.primary }} />;
  };

  renderEmptyComponent = () => {
    if (!this.props.fetching) {
      return (
        <View>
          <Text style={styles.noDataText}>No Data</Text>
        </View>
      );
    }
    return null;
  };

  renderList() {
    const { filteredVehicles } = this.state;
    return (
      <FlatList
        style={styles.list}
        keyExtractor={item => item.url}
        contentContainerStyle={styles.listContent}
        data={filteredVehicles}
        extraData={this.state}
        renderItem={this.renderItem}
        ListEmptyComponent={this.renderEmptyComponent}
        ListFooterComponent={this.renderFooter}
        onEndReachedThreshold={0.4}
        onEndReached={this.handleLoadMore}
      />
    );
  }

  renderHeader() {
    return <CustomHeader title={Strings.vehicles} />;
  }

  renderSearchBar() {
    return (
      <View style={styles.searchContainer}>
        <Item>
          <Icon name="search" />
          <Input
            placeholder="Search Vehicles"
            style={styles.search}
            value={this.state.searchedText}
            onChangeText={this.onSearchChange}
          />
          <Button transparent onPress={this.onCancelPress}>
            <Icon name="close" style={styles.close} />
          </Button>
        </Item>
      </View>
    );
  }

  //show loader when api calling
  renderLoader() {
    if (this.props.fetching && this.page === 1) {
      return (
        <View style={[StyleSheet.absoluteFill, styles.loaderContainer]}>
          <View style={styles.loaderInnerContainer}>
            {Array(6).fill(<ItemLoader />)}
          </View>
        </View>
      );
    }
    return null;
  }

  render() {
    return (
      <Container style={styles.mainContainer}>
        {this.renderHeader()}
        <View style={styles.mainContainer}>
          {this.renderSearchBar()}
          {this.renderList()}
          {this.renderLoader()}
        </View>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  vehicles: state.home.vehicles,
  fetching: state.home.fetching,
  error: state.home.error,
  haveMore: state.home.haveMore
});

const mapDispatchToProps = dispatch => ({
  getAllVehicles: page => dispatch(HomeAction.vehicleRequest(page))
});

HomeScreen.propTypes = {
  getAllVehicles: PropTypes.func,
  fetching: PropTypes.bool,
  vehicles: PropTypes.array,
  haveMore: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
