import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { createReduxBoundAddListener } from 'react-navigation-redux-helpers';

import { ROOT } from '../../../constants/platform';
import Navigator from '../../screens';

class AppNavigator extends Component {
  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPress);
  }
  onBackPress = () => {
    const { dispatch, nav } = this.props;
    if (nav.index === 0) {
      return false;
    }
    dispatch(NavigationActions.back());
    return true;
  };

  addListener = createReduxBoundAddListener(ROOT);

  render() {
    return (
      <Navigator
        navigation={{
          dispatch: this.props.dispatch,
          state: this.props.nav,
          addListener: this.addListener
        }}
      />
    );
  }
}

AppNavigator.propTypes = {
  // TODO: Declare a correct PropType for nav
  nav: PropTypes.any // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = store => ({ nav: store.nav });

export default connect(mapStateToProps)(AppNavigator);
