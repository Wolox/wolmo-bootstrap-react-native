import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { createReduxContainer } from 'react-navigation-redux-helpers';

import { ROOT } from '../../../constants/platform';
import Navigator from '../../screens';

const AppWithNavigationState = createReduxContainer(Navigator, ROOT);

class AppNavigator extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }

  onBackPress = () => {
    const { dispatch, state } = this.props;
    if (state.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    return <AppWithNavigationState {...this.props} />;
  }
}

AppNavigator.propTypes = {
  state: PropTypes.shape({
    index: PropTypes.number.isRequired
  })
};

const mapStateToProps = store => ({ state: store.nav });

export default connect(mapStateToProps)(AppNavigator);
