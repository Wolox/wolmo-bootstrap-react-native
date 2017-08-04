import React, { Component } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default class DrawerOverlay extends Component {
  state = { fadeAnimation: new Animated.Value(0), present: false };

  componentWillReceiveProps(nextProps) {
    if (nextProps.drawerPresent && !this.state.present) {
      this.show();
    } else if (!nextProps.drawerPresent && this.state.present) {
      this.hide();
    }
  }

  show() {
    this.setState({ present: true }, () => {
      Animated.timing(this.state.fadeAnimation, { toValue: 1 }).start();
    });
  }

  hide() {
    Animated.timing(this.state.fadeAnimation, { toValue: 0 }).start(() => {
      this.setState({ present: false });
    });
  }

  render() {
    if (this.state.present) {
      return <Animated.View style={[styles.container, { opacity: this.state.fadeAnimation }]} />;
    }
    return null;
  }
}

DrawerOverlay.propTypes = {
  drawerPresent: PropTypes.bool.isRequired
};
