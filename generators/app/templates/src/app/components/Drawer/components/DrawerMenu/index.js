import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as drawerActions } from '../../../../../redux/drawerHandlers';

import DrawerMenu from './layout';

class DrawerMenuContainer extends Component {
  handleCloseDrawer = () => {
    this.props.dispatch(drawerActions.drawerToggled(false));
  };

  render() {
    return <DrawerMenu onCloseDrawer={this.handleCloseDrawer} wrapOnPress={this.props.wrapOnPress} />;
  }
}

DrawerMenuContainer.propTypes = {
  wrapOnPress: PropTypes.func.isRequired
};

export default connect()(DrawerMenuContainer);
